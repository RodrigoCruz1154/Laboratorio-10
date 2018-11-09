const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{
    userNewUrlParser: true,
    useCreateIndex: true
})
.then(db=>console.log('connection success!'))
.catch(err=>console.log(err));