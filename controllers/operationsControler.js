const express = require("express");
const operaciones = require("../models/operationModel");
const transaccion = require("../models/transactionModel");
var ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken')

const actividadCtrlr = (req, res, next) => {
  let dato = {
    titulo: "req.data",
  };
  res.render("home", { dato });
};




const getAllOperations = async (req, res, next) => {
 
   try {
    const operations = await operaciones.find().sort( { createdAt: -1 } );
   // console.log(operations);
    if (operations) {
      res.json({activitys:operations});
      //res.render('home',{oper:operations})
    } else {
      res.send({ message: "nada que mostrar" });
    }
  } catch (err) {
    console.log("aca hay un error en elk render", err);
    res.send({ message: "error retrieving users",err });
  } 
};
//get all activities

const getoperations = async (req, res, next) => {
  const token=req.headers['authorization']
  var decoded=jwt.decode(token)

  console.log(decoded);
  //res.json(req.query.origen_id);
   try {
    const operations = await operaciones.find({
      $or:[{"origen_id": decoded.user_id},
      {"destino_id": decoded.user_id}]
    }).sort( { createdAt: -1 } );
    console.log(operations);
    if (operations) {
      res.json({activitys:operations});
      //res.render('home',{oper:operations})
    } else {
      res.send({ message: "nada que mostrar" });
    }
  } catch (err) {
    console.log("aca hay un error en elk render", err);
    res.send({ message: "error retrieving users",err });
  } 
};

//post new activities:
const newOperation = async (req, res) => {
  console.log(req.body)
  const operation = new operaciones({
    ...req.body,
  });

  try {
    const newOperation = await operation.save();
    res.json(newOperation);
  } catch (err) {
    res.json({ message: "error saving user", err });
  }
};

/* const editOneOperation = async (req, res) => {
  try {
    var id = req.params.id;
    var o_id = new ObjectId(id);

    const objOperEdit = await operaciones.findById(o_id);
    res.json(objOperEdit);
    //res.render("editOper",{objOperEdit})
  } catch (error) {
    res.send({ message: `NO ENCONTRAMOS NADA${error}` });
  }
}; */

const editOneOperation=async(req,res)=>{
  console.log(req.params.id)
 // res.json(req.params.id)

   try {
    var idToEdit=req.params.id;
    var o_id=new ObjectId(idToEdit);
  console.log(o_id)


    const resOperEdit=await operaciones.findByIdAndUpdate(
      {_id:o_id },
      {estado:req.body.estado},
      {
        new:true
      }
      );
      res.json(resOperEdit)
  } catch (error) {
    res.send({ message: `NO ENCONTRAMOS NADA${error}` });
  } 
}

const deleteForId = async (req, res) => {
  console.log(req.body.user_id);
  try {    
    const resOperDelete = await operaciones.remove({      
      $or:[{"origen_id": req.body.user_id},
      {"destino_id": req.body.user_id}]
    });    
    res.json(resOperDelete);
    // res.send(resOperDelete)
  } catch (error) {
    res.send({ message: "error al querer borrar :",error });
  }
};

const saveEditOperation = async (req, res) => {
  try {
    const objActuali = await operaciones.findByIdAndUpdate(
      { _id: req.body.id },
      { comentario: req.body.comentario },
      {
        new: true,
      }
    );
    res.send({ message: "Guardado con exito", objActuali });

    //res.render("home")
  } catch (error) {
    res.send({ message: "erropr de algo aca", error });
    console.log("es un error ");
  }
};

module.exports = {
  actividadCtrlr,
  getoperations,
  newOperation,
  editOneOperation,
  saveEditOperation,
  deleteForId,
  getAllOperations
};
