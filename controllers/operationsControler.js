const express = require("express");
const operaciones = require("../models/operationModel");
const transaccion = require("../models/transactionModel");
var ObjectId = require("mongodb").ObjectId;

const actividadCtrlr = (req, res, next) => {
  let dato = {
    titulo: "req.data",
  };
  res.render("home", { dato });
};



//get all activities
const getoperations = async (req, res, next) => {
  console.dir(req.query);
  //res.json(req.query.origen_id);
   try {
    const operations = await operaciones.find({
      $or:[{"origen_id": req.query.origen_id},
      {"destino_id": req.query.origen_id}]
    }).sort( { createdAt: -1 } );
    console.log(operations);
    if (operations) {
      res.json(operations);
      //res.render('home',{oper:operations})
    } else {
      res.send({ message: "nada que mostrar" });
    }
  } catch (err) {
    console.log("aca hay un error en elk render", err);
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
  try {
    const resOperDelete = await operaciones.remove({
      _id: req.body.idToDelete,
    });
    res.json(resOperDelete);
    // res.send(resOperDelete)
  } catch (error) {
    res.send({ message: "error al querer borrar" });
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
};
