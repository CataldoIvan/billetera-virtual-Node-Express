const express=require('express')
const operaciones = require("../models/operationModel");
const transaccion=require("../models/transactionModel")
const path = require("path");
const transactionModel = require('../models/transactionModel');
var ObjectId = require('mongodb').ObjectId; 



const actividadCtrlr=(req,res,next)=>{   
        let dato={
            titulo:"req.data"
        }        
        res.render("home",{dato})       
    
}

//get all activities
const getoperations = async (req, res,next) => {
  

    try {
      const operations = await operaciones.find();
      console.log(operations)
      if(operations){
      //res.json(getoperations);
      res.render('home',{oper:operations}) 
      }else{
        res.send({message:"nada que mostrar"})
      }
             
    } catch (err) {
        console.log("aca hay un error en elk render",err);
      res.send({ message: "error retrieving users" });
    }
    
  };

  
  
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
const editOneTransaction=async(req,res)=>{  
  try {   
    var id = req.params.id;       
    var o_id = new ObjectId(id); 

    const objOperEdit=await operaciones.findById(o_id)

    res.render("editOper",{objOperEdit})    
  } catch (error) {
    res.send({message:`NO ENCONTRAMOS NADA${error}`})
  }

}
  ///SECCION DE TRANSACCIONES QUE SE PUEDEN HACER
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

  const saveEditTransaction=async(req,res)=>{
    console.log(req.params.comentario);
    try {
      await operaciones.findByIdAndUpdate(
        {_id:req.params.id},
        {comentario:req.params.comentario},
        
      
        )
     /* // console.log(objOperation)*/
      res.send({message:"se encontro algo"}) 
    } catch (error) {
      res.send({message:"erropr de algo aca",error})

      console.log("es un error ");
      
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
  
  
  module.exports={
    actividadCtrlr,
    getoperations,
    newActivity,
    addNewTransaction,
    getTransactions,
    editOneTransaction,
    saveEditTransaction
}