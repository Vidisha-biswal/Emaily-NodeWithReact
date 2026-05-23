const sendgrid= require('sendgrid');
const helper=sendgrid.mail;
const keys= require('../config/keys');

class Mailer extends helper.Mail{  
    constructor( { subject, recipients}, content){    
        super();
      this.sgApi=sendgrid(keys.sendGridKey);    
      const senderEmail=keys.fromEmail || process.env.FROM_EMAIL;

      this.from_email= new helper.Email(senderEmail);    
      this.subject=subject;    
      this.body=new helper.Content('text/html',content);    
      this.recipients= this.formatAddresses(recipients);
      this.addContent(this.body);    
      this.setFrom(this.from_email);
  
      this.addClickTracking();    
      this.addRecipients();  }
   formatAddresses(recipients)  {    
    return recipients.map(({ email })=>{      
        return new helper.Email(email);    
    });  
}
   addClickTracking()  {    
    const trackingSettings=new helper.TrackingSettings();    
    const clickTracking=new helper.ClickTracking(true,true);
      trackingSettings.setClickTracking(clickTracking);    
      this.addTrackingSettings(trackingSettings);  
    }
   addRecipients()  {    
        const personalize=new helper.Personalization();    
        this.recipients.forEach(recipient=>{      
            personalize.addTo(recipient);    
        });    
        this.addPersonalization(personalize);   
    }
   async send(){    
        const request= this.sgApi.emptyRequest({      
            method: 'POST',      
            path:'/v3/mail/send',      
            body: this.toJSON()    
        });    
        // const response=this.sgApi.API(request);    
        // return response;  
        return new Promise((resolve, reject) => {
            this.sgApi.API(request, (error, response) => {
            if (error) {
                console.error("SendGrid Execution Error:", error.response.body);
                return reject(error);
            }
            resolve(response);
        });
    });
}}
module.exports=Mailer;