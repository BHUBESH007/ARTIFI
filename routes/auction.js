const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname,'..','data','auction.json');
const PRODUCTS = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json')));

function read(){ return JSON.parse(fs.readFileSync(DATA,'utf8')); }
function write(d){ fs.writeFileSync(DATA, JSON.stringify(d,null,2)); }

router.get('/', (req,res)=>{
  const auction = read();
  const item = PRODUCTS.find(p=>p.id===auction.itemId);
  res.render('auction',{auction,item});
});

router.post('/bid',(req,res)=>{
  const auction = read();
  const amt = parseInt(req.body.amount||'0');
  if(amt <= auction.currentBid) return res.redirect('/auction?error=low');
  auction.currentBid = amt;
  auction.history.unshift({who:req.body.who||'Anon',amount:amt,at:new Date().toISOString()});
  write(auction);
  res.redirect('/auction');
});

module.exports = router;
