const _=require('lodash');
const {Path} =require('path-parser');
const {URL} = require('url'); 
const mongoose=require('mongoose');
const requireLogin= require('../middlewares/requireLogin');
const requireCredits=require('../middlewares/requireCredits');
const Mailer= require('../services/Mailer');
const surveyTemplate=require('../services/emailTemplates/surveyTemplate');
const Survey=mongoose.model('surveys');

module.exports= app=>{  
    app.get('/api/surveys',requireLogin, async (req,res)=>{
        const surveys= await Survey.find({_user: req.user.id}).select({recipients: false});
        res.send(surveys);
    });
    
        app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send(`
            <html>
                <head>
                    <style>
                        body {
                            background-color: #faf9f6;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .card {
                            background: white;
                            padding: 40px;
                            border-radius: 8px;
                            border: 1px solid #eef0f2;
                            text-align: center;
                            max-width: 400px;
                            box-shadow: 0 4px 12px rgba(38, 50, 56, 0.05);
                        }
                        .success-badge {
                            background: #d5f3d2; 
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0 auto 25px auto;
                            position: relative;
                        }
                        .checkmark {
                            display: inline-block;
                            transform: rotate(45deg);
                            height: 24px;
                            width: 12px;
                            border-bottom: 4px solid #11d6a5; 
                            border-right: 4px solid #11d6a5;
                            margin-top: -4px;
                        }
                        h2 {
                            color: #263238;
                            margin: 0 0 12px 0;
                            font-weight: 700;
                            font-size: 1.6rem;
                            letter-spacing: -0.5px;
                        }
                        p {
                            color: #5d4037; 
                            margin: 0 0 30px 0;
                            font-size: 1rem;
                            line-height: 1.6;
                        }
                        .footer {
                            font-size: 0.8rem;
                            color: #9e9e9e;
                            border-top: 1px solid #eef0f2;
                            padding-top: 15px;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                        }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <div class="success-badge">
                            <div class="checkmark"></div>
                        </div>
                        <h2>Feedback Recorded!</h2>
                        <p>Thanks for voting! Your input helps us build better experiences and improve our platform metrics.</p>
                        <div class="footer">
                            Powered by Emaily Inc.
                        </div>
                    </div>
                </body>
            </html>
        `);
    });

    app.post('/api/surveys/webhooks',(req,res)=>{
        const p=new Path('/api/surveys/:surveyId/:choice');

        _.chain(req.body)
        .map(({email,url})=>{
            const match= p.test(new URL(url).pathname); 
            if(match){
                return { email: email, surveyId: match.surveyId, choice: match.choice };
            }
        })
        .compact()
        .uniqBy('email','surveyId')
        .each(({surveyId, email, choice})=>{
            Survey.updateOne(
                { 
                    _id: surveyId,
                    recipients: { 
                        $elemMatch: { email: email, responded: false } 
                    }
                }, { 
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true } ,
                    lastResponded: new Date()
                }
            ).exec();
        })
        .value();
        
        res.send({});
    });

    app.post('/api/surveys',requireLogin,requireCredits, async (req,res)=>{    
        const {title,subject,body, recipients}= req.body;    
        const survey= new Survey({      
            title,      
            subject,      
            body,      
            recipients: recipients.split(',').map(email=> ( { email:email.trim() } )),      
            _user: req.user.id ,      
            dateSent:Date.now()    
        });    
        const mailer=new Mailer(survey, surveyTemplate(survey));    
        try{
            await mailer.send();
            await survey.save();
            req.user.credits-=1;
            const user= await req.user.save();
            res.send(user);
        } catch (err) {
            console.log("ROUTE HANDLER ERROR:", err);
            res.status(422).send(err);
        }
    });
};