const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const PRODUCTS = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json')));

router.get('/', (req,res)=>{
  res.render('index',{products:PRODUCTS});
});

router.get('/login',(req,res)=> res.render('login',{error:null}));
router.post('/login',(req,res)=>{
  const email = req.body.email;
  if(!email) return res.render('login',{error:'Email required'});
  res.redirect('/profile/' + encodeURIComponent(email.split('@')[0]));
});

router.get('/about',(req,res)=> res.render('about'));

module.exports = router;
