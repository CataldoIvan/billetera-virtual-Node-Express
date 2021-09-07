var jwt = require('jsonwebtoken');
const moment = require('moment');


var validarTokenFn = function(req,res, next){
    //var today = new Date().toISOString().slice(0, 10);
    console.log(`EL DIA EEEEEES ${Date.now()}`)

    //Comprobamos que tengamos cabecera de autenticacion
    /* if(!req.headers.authorization){
        console.log("no tiene token de seguridad")
      return res.status(403).send({message:'Sin cabecera de autenticacion'});
    } */

    //Limpiamos las comillas dobles y simples si vienen
    //var token = req.headers.authorization.replace(/['"]+/g,'');
    try{
        console.log(jwt.decode(token))
      //Decodificamos el token con la informacion del usuario
      var payload=jwt.decode(token);
      //Si la fecha de expiracion es anterior a la actual, el token ha expirado
      if(payload.exp <=today){
        console.log("token expirado")
        return res.status(401).send({message:'Token expirado'});
      }
    }catch(ex){
      console.log(ex);

      console.log("token no valido")
     // console.log(moment().unix())
      return res.status(404).send({message:'Token no valido'});
    }

    //Agregamos a la request un objeto user con la informacion del token decodifciado
    req.user = payload;

    //Metodo para contnuar la  ejecucion del programa
    console.log("token ok!")
    next();

  }

  module.exports={validarTokenFn}