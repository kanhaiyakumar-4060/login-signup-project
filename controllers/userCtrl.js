
const Users = require('../models/users');
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');
const addUser = (req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    var data = new Users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.userName,
        email: req.body.emailId,
        password: hash
    });
    data.save(function(error,result){
        if(error){
            console.log(error)
        }
        req.flash('message','Please Login')
        res.redirect('/login')
    })
    
}
const loginCheck = async(req,resp)=>{
    var results = await Users.findOne({name:req.body.userName},{});
    if(results){
        var check = await bcrypt.compare(req.body.password,results.password);
        if(check){
            req.flash('message','Login Successfully')
            sess = req.session;
            sess.name = results.name; 
            sess.email = results.email;
            resp.redirect('/home')
        }else{
            req.flash('message','Invalid Password')
            resp.redirect('/login')
        }
    }else{
        req.flash('message','Invalid Password or Username')
        resp.redirect('/login')
    }
}
const logOut = (req,res) =>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }
        req.flash('message','LogOut Successfully')
        res.redirect('/login');
    })
}
module.exports = {
    addUser,
    loginCheck,
    logOut
}