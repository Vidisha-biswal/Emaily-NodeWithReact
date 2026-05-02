const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongiURI);

const authRoutes=require('./routes/authRoutes');

const app=express();

authRoutes(app);

const PORT=process.env.PORT || 5000;
app.listen(PORT);