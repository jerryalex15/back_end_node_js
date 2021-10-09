const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const stuffRoutes = require('./routes/stuff');
app.use('/api/stuff', stuffRoutes);
const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);
app.use('/images', express.static(path.join(__dirname,'images')));

module.exports = app;