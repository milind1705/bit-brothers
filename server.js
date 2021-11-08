const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const userRoutes = require('./routes/user.routes');


mongoose.connect('mongodb://localhost:27017/bitBrother');
mongoose.connection.once('open', () =>{
    console.log('Connected to dataBase...')
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user', userRoutes)
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})