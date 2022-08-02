const express = require('express')
const app = express()
const port = 8080;
const path = require('path');
var session = require('express-session');

var flash = require('connect-flash');
app.use(flash());
app.use(session({
  secret: 'vhccfhgvhjghjvgvhghghv',
  resave: false,
  saveUninitialized: false,
}))

app.use('/',require('./route'));

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./views'));



app.listen(port,()=>{
  console.log(`App is listening at http://localhost:${port}`)
})