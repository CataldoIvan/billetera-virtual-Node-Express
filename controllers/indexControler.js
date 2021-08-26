const express=require('express')


const homeCtrlr=(req,res)=>{
    
        let dato={
            titulo:"\naca es un titulo"
        }
        res.render('index',dato)
    
}



module.exports={
  
    homeCtrlr
}