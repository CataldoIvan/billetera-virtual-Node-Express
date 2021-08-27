const express=require('express')
const operaciones = require("../models/operationModel");
const transaccion=require("../models/transactionModel")


const actividadCtrlr=(req,res,next)=>{   
        let dato={
            titulo:"req.data"
        }        
        res.render("home",{dato})       
    
}

//get all activities
const getoperations = async (req, res,next) => {
  console.log(__dirname);
    try {
      const operations = await operaciones.find();
      console.log(operations)
      if(operations){
      //res.json(getoperations);
      res.render('home',{operations}) 
      }else{
        res.send({message:"nada que mostrar"})
      }
             
    } catch (err) {
        console.log("aca hay un error en elk render",err);
      res.send({ message: "error retrieving users" });
    }
    
  };

  const addNewTransaction=async(req,res)=>{
    const newTransaccion=new transaccion(
      {
        ...req.body
      }
      ) 

      try {
        const respNewTrans= await newTransaccion.save();
        console.log(respNewTrans);
        res.send({messahe: `nueva transaccion guardado ${respNewTrans}`})
      } catch (error) {
        res.send({messahe: `error transaccion  NO guardada `})
      }

  }
  const getTransactions=async(req,res)=>{
    try {
      const respTransac= await transaccion.find()
      console.log(respTransac);
      //if(respTransac){
        res.render("index",{respTransac})
      //}else{
        //res.send({message:"nada por aca para cargar"})
      //}
      
    } catch (error) {
      res.send({messahe: `error transaccion  NO guardada `})
      res.send({message:"ERROR AL CARGAR TRANSACCIONES"})
    }
  }


  //post new activities:
const newActivity = async (req, res) => {
   
      const user = new operaciones({       
        ...req.body,
      });
  
    
      try {
        const newUser = await user.save();
       
        res.json(newUser);
      } catch (err) {
        res.json({ message: "error saving user",err });
      }
    };
    

module.exports={
    actividadCtrlr,
    getoperations,
    newActivity,
    addNewTransaction,
    getTransactions
}