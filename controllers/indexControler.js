const express=require('express')
const transacciones = require("../models/activityModel");

const homeCtrlr=(req,res)=>{
    
        let dato={
            titulo:"\naca es un titulo"
        }
        res.render('index',dato)
    
}

//get all users
const getUsers = async (req, res) => {
  try {
    const getUsers = await transacciones.find();
    console.log(getUsers)
    res.json(getUsers);
  } catch (err) {
    res.json({ message: "error retrieving users" });
  }
};

//post new user:
const postUser = async (req, res) => {
  //console.log(" esto es ",req.body)
  //res.json(req.body.origen_id)
    const user = new transacciones({

      
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
  getUsers,
    postUser,
    homeCtrlr
}