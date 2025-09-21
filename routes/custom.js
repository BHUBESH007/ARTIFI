const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req,res)=> res.render('custom'));
router.post('/', (req,res)=>{
  const payload = {id:uuidv4(),type:req.body.type,details:req.body.details,at:new Date().toISOString()};
  // In prototype, we don't persist; show confirmation
  res.render('custom-submitted',{data:payload});
});

module.exports = router;
