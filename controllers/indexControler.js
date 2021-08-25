const express=require('express')
const transacciones = require("../models/activityModel");

const homeCtrlr=(req,res)=>{
    
        let dato={
            titulo:"\naca es un titulo"
        }
        res.render('index',dato)
    
}

//post new user:
const postUser = async (req, res) => {
    const user = new transacciones({
      ...req.body,
    });
  
    try {
      const newUser = await user.save();
      res.json(newUser);
    } catch (err) {
      res.json({ message: "error saving user" });
    }
  };
  

module.exports={
    postUser,
    homeCtrlr
}