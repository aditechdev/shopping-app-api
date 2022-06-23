//! Import From Package
const express = require('express');
const mongoose = require('mongoose');
const adminRoute = require('./routes/admin');
//! Import from File
const authRouter = require('./routes/auth');
const statusRouter = require('./routes/status');
// DB Config
require('dotenv').config();
const DB = process.env.DATABASE_KEY;

// Init
const app = express();
const PORT = process.env.PORT || 3000; //localHost


//! MiddleWare
//! Client -> Server -> Clinet
app.use(express.json());
app.use(authRouter);
app.use(statusRouter);
app.use(adminRoute);

// ! Connect database =>

mongoose.connect(DB).then(() => { 
    console.log("Connection Successful 🎉")
}).catch(e => { 
    console.log(e);
});

app.listen(PORT, () => { 
    
    console.log("Connect at PORT: " +PORT);
    console.log(`Connect at PORT: ${PORT}`);
}); // If you dont put any number, It will access local host,
//Android cannot listen to local host, so we are useing here "0.0.0.0"



