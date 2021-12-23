const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/', (req, res, next) => {

  res.render('home')
  
});



router.get('/entrar', (req, res,) =>{
  res.render('entrar')
})

router.post('/entrar/env', (req, res,) =>{
  
  const {email,senha} = req.body;
  

  if(email == "teste@gmail.com" && senha == "1234"){
    function alert(){
      alert('Logado')
    }

    res.redirect('/')
  }
  else{
    res.redirect('/entrar')
  }
})

module.exports = router;

