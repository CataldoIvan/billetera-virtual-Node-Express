
const estados=require("../models/estadoModel")

const getStatus=async(req,res)=>{
    try {
        const resEstados=await estados.find()
        if(resEstados){
            res.json({status:resEstados})
        } else{
            res.send({ message: "nada que mostrar" });
        }
    } catch (error) {
        res.send({ message: "error al tratar de obtener Estados" });
    }
}

const addStatus= async(req,res)=>{
    const cuerpoEstados=new estados({
        ...req.body
    })
    try {
        const newStatus=await cuerpoEstados.save()
        if(newStatus){
            res.json({status:newStatus})
        } else{
            res.send({ message: "No se pudo agregar el nuevo estado IF" });
        }
    } catch (error) {
        res.send({ message: `No se pudo agregar el nuevo estado :${error}` });
        
    }
}

module.exports={
    addStatus,
    getStatus
}