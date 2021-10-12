const express = require("express");
const operacionesPropias = require("../models/operationOwnModel");
const transaccion = require("../models/transactionModel");
var ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken')

const actividadCtrlr = (req, res, next) => {
  let dato = {
    titulo: "req.data",
  };
  res.render("home", { dato });
};




const getAllOwnOperations = async (req, res, next) => {
 
   try {
    const operations = await operacionesPropias.find().sort( { createdAt: -1 } );
   // console.log(operations);
    if (operations) {
      res.json({activitys:operations});
      //res.render('home',{oper:operations})
    } else {
      res.send({ message: "OWNS  nada que mostrar" });
    }
  } catch (err) {
    console.log("OWNS aca hay un error en elk render", err);
    res.send({ message: "OWNS error retrieving users",err });
  } 
};
//get all activities

const getOwnoperations = async (req, res, next) => {
  const token=req.headers['authorization']
  var decoded=jwt.decode(token)

  console.log(decoded);
  //res.json(req.query.origen_id);
   try {
    const operations = await operacionesPropias.find({"origen_id": decoded.user_id} 
     ).sort( { createdAt: -1 } );
    console.log(operations);
    if (operations) {
      res.json({activitys:operations});
      //res.render('home',{oper:operations})
    } else {
      res.send({ message: "OWNS nada que mostrar xxx",decoded });
    }
  } catch (err) {
    console.log("OWNS aca hay un error en elk render", err);
    res.send({ message: "OWNS error retrieving users",err });
  } 
};

//post new activities:
const newOwnOperation = async (req, res) => {
  console.log(req.body)
  const operation = new operacionesPropias({
    ...req.body,
  });

  try {
    const newOperation = await operation.save();
    res.json(newOperation);
  } catch (err) {
    res.json({ message: "OWNS error saving user", err });
  }
};



const editOwnOneOperation=async(req,res)=>{
  console.log("que es",req.params.id)
  console.log("Body",req.body)
 // res.json(req.params.id)

   try {
    var idToEdit=req.params.id;
    var o_id=new ObjectId(idToEdit);
  console.log(o_id)


    const resOperEdit=await operacionesPropias.findByIdAndUpdate(
      {_id:o_id },
      {...req.body},
      {
        new:true
      }
      );
      res.json(resOperEdit)
  } catch (error) {
    res.send({ message: `OWNS  NO ENCONTRAMOS NADA${error}` });
  } 
}

const deleteOwnForId = async (req, res) => {
  console.log(req.body.user_id);
  try {    
    const resOperDelete = await operacionesPropias.remove({      
      "origen_id": req.body.user_id
    });    
    res.json(resOperDelete);
    // res.send(resOperDelete)
  } catch (error) {
    res.send({ message: "OWNS error al querer borrar :",error });
  }
};

const saveEditOwnOperation = async (req, res) => {
  try {
    const objActuali = await operacionesPropias.findByIdAndUpdate(
      { _id: req.body.id },
      { comentario: req.body.comentario },
      {
        new: true,
      }
    );
    res.send({ message: "OWNS Guardado con exito", objActuali });

    //res.render("home")
  } catch (error) {
    res.send({ message: "OWNS erropr de algo aca", error });
    console.log("OWNS es un error ");
  }
};

module.exports = {
  
  getOwnoperations,
  newOwnOperation,
  editOwnOneOperation,
  saveEditOwnOperation,
  deleteOwnForId,
  getAllOwnOperations
};
