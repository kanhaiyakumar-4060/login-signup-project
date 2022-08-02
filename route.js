const express = require('express')
const userCtrl = require('./controllers/userCtrl')
var router = express.Router();
var multer = require('multer') //upload image through user so use multer
var upload = multer();       // given path through multer

router.use(express.urlencoded({extended:true}))
router.get('/home', function (req, res) {
  console.log(req.session)
  if(req.session.email){
    res.render('home',{name:req.session.name})
  }else{
    res.redirect("/login")
  }
  })

router.get('/login', function (req, res) {
    res.render('login',{message:req.flash('message')})
  })

router.get('/add', function (req, res) {
    res.render('add')
  })


router.post('/login-user',upload.any(), userCtrl.loginCheck);
router.post('/add-user',upload.any(), userCtrl.addUser);
router.get('/log-out', userCtrl.logOut);

module.exports = router
