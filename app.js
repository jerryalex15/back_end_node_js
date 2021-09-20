const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const stuffRoutes = require('./routes/stuff');
app.use('/api/stuff', stuffRoutes);
const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);

module.exports = app;