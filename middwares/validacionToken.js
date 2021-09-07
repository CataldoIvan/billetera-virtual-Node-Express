var jwt = require('jsonwebtoken');
const moment = require('moment');


var validarTokenFn = function(req,res, next){
 
   // console.log(`EL DIA EEEEEES ${Date.now()}`)
    //console.dir(req.headers.authorization)
    const token=req.headers.authorization
    var decoded = jwt.decode(token);
    //console.log(decoded.exp) 
    //console.log(Date.now()) 
    if (Date.now() >= decoded.exp*1000) {
        console.log("token expirado")
        return res.status(401).send({message:'Token expirado'});      
      }else{
        console.log("token ok!") 
        //req.user = decoded;
        next();
      }



  }

  module.exports={validarTokenFn}