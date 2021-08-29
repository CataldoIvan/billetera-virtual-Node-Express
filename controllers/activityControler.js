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
  const newOperation = async (req, res) => {
    const operation = new operaciones({       
      ...req.body,
    });
    
    try {
      const newOperation = await operation.save();      
      res.json(newOperation);
    } catch (err) {
      res.json({ message: "error saving user",err });
    }
  };

const editOneOperation=async(req,res)=>{  
  
   try {   
    var id = req.params.id;       
    var o_id = new ObjectId(id); 

    const objOperEdit=await operaciones.findById(o_id)

    res.render("editOper",{objOperEdit})    
  } catch (error) {
    res.send({message:`NO ENCONTRAMOS NADA${error}`})
  } 
}
const deleteForId=async(req,res)=>{
  try {
    const resOperDelete= await operaciones.remove({_id:req.body.idToDelete})
    res.send(resOperDelete)
  } catch (error) {
    res.send({message:"error al querer borrar"})
  }
}

  ///SECCION DE TRANSACCIONES QUE SE PUEDEN HACER
  const addNewTransaction=async(req,res)=>{
    const newTransaccion=new transaccion(
      {
        ...req.body
      }) 

      try {
        const respNewTrans= await newTransaccion.save();
        console.log(respNewTrans);
        res.send({messahe: `nueva transaccion guardado ${respNewTrans}`})
      } catch (error) {
        res.send({messahe: `error transaccion  NO guardada `})
      }
  }

  const saveEditOperation=async(req,res)=>{
   
     try {
      const objActuali=await operaciones.findByIdAndUpdate(
        {_id:req.body.id},
        {comentario:req.body.comentario}, {
          new: true
        })
     
      res.render("home") 
    } catch (error) {
      res.send({message:"erropr de algo aca",error})
      console.log("es un error ");      
    } 
  }
  const getTransactions=async(req,res)=>{
    try {
      const respTransac= await transaccion.find()
      console.log(respTransac);
      if(respTransac){
        res.render("index",{respTransac})
      }else{
        res.send({message:"nada por aca para cargar"})
      }
      
    } catch (error) {
      res.send({messahe: `error transaccion  NO guardada `})
      res.send({message:"ERROR AL CARGAR TRANSACCIONES"})
    }
  }
  
  
  module.exports={
    actividadCtrlr,
    getoperations,
    newOperation,
    addNewTransaction,
    getTransactions,
    editOneOperation,
    saveEditOperation,
    deleteForId
}