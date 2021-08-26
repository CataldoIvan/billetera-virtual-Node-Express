const express=require('express')
const transacciones = require("../models/activityModel");


const actividadCtrlr=(req,res,next)=>{   
        let dato={
            titulo:"req.data"
        }        
        res.render("home",{dato})
        
    
}

//get all activities
const getActivitys = async (req, res,home) => {
 /*//  res.render('home',{
    titulo:"es un titulo desde el home"
  }) */
    try {
      const activitys = await transacciones.find();
      console.log(activitys)
      //res.json(getActivitys);
      res.render('home',{activitys})      
    } catch (err) {
        console.log("aca hay un error en elk render",err);
      res.send({ message: "error retrieving users" });
    }
    
  };


  //post new activities:
const newActivity = async (req, res) => {
   
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
    actividadCtrlr,
    getActivitys,
    newActivity,
}