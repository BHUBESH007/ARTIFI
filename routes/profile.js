const express = require('express');
const router = express.Router();

router.get('/:username', (req,res)=>{
  const user = {name:req.params.username, email:req.params.username+'@example.com'};
  res.render('profile',{user});
});

module.exports = router;
