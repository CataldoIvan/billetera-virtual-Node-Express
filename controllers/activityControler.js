const express=require('express')

const actividadCtrlr=(req,res)=>{   
        let dato={
            titulo:"req.data"
        }
        
        res.render('index',dato)
    
}



module.exports={
    actividadCtrlr
}