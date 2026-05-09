const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Force use of Cloudflare/Google DNS
const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
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

const app=express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});