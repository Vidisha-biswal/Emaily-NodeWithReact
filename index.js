const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Force use of Cloudflare/Google DNS
const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');

//mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoURI, {
    serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => {
    console.error("MongoDB connection error details:", err.message);
    console.log("Check if your IP address is whitelisted in MongoDB Atlas.");
  });


const authRoutes=require('./routes/authRoutes');
const billingRoutes=require('./routes/billingRoutes');

const app=express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
/*
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
    */

// ✅ NEW FIXED CODE
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
   
    // Express will serve production assets like main.js or main.css
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    // Express will serve the index.html file if it doesn't recognize the route
    app.get('(.*)', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});