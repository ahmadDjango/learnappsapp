var express = require('express');
var bodyParser =require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', function(req, res){
  var adminPass = 'password123';
  
  var username =   req.body.username;
  var password =   req.body.password;
  
  if(password === adminPass){
    res.redirect('/success');
  }
  else
  {
    res.redirect('/failed');
  }
  
});

app.get('/success', function(req,res){
  res.send('Login Successful!');
});
app.get('/failed', function(req,res){
  res.send('Invalid Username or pass');
});


app.listen(8080, function(){
  console.log('server is running on port 8080');
});
