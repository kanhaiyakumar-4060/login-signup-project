const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sessionLogin',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con=>{
    console.log("connected DB")
}).catch(error=>{
    console.log("error",error)
})

module.exports = mongoose;