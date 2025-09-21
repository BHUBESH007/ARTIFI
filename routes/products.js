const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname,'..','data','products.json');

function read(){ return JSON.parse(fs.readFileSync(DATA,'utf8')); }
function write(d){ fs.writeFileSync(DATA, JSON.stringify(d,null,2)); }

router.get('/', (req,res)=>{
  const products = read();
  res.render('products',{products});
});

router.get('/:id', (req,res)=>{
  const products = read();
  const p = products.find(x=>x.id===req.params.id);
  if(!p) return res.status(404).render('404');
  res.render('product',{product:p});
});

router.post('/:id/rate', (req,res)=>{
  const products = read();
  const p = products.find(x=>x.id===req.params.id);
  if(!p) return res.status(404).render('404');
  const r = parseInt(req.body.rating||'0');
  if(r>=1 && r<=5){ p.ratings = p.ratings||[]; p.ratings.push(r); p.rating = Math.round((p.ratings.reduce((a,b)=>a+b,0)/p.ratings.length)*10)/10; write(products); }
  res.redirect('/products/'+req.params.id);
});

module.exports = router;
