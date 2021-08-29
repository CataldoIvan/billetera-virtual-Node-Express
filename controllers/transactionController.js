const transaccion=require("../models/transactionModel")


///SECCION DE TRANSACCIONES QUE SE PUEDEN HACER
const addNewTransaction=async(req,res)=>{
    const newTransaccion=new transaccion(
      {
        ...req.body
      }) 

      try {
        const respNewTrans= await newTransaccion.save();
        console.log(respNewTrans);
        res.json(respNewTrans);

       // res.send({messahe: `nueva transaccion guardado ${respNewTrans}`})
      } catch (error) {
        res.send({messahe: `error transaccion  NO guardada `})
      }
  }

  const getTransactions=async(req,res)=>{
    try {	
      const respTransac= await transaccion.find()
      console.log(respTransac);
      if(respTransac){
        res.json(respTransac)
        //res.render("index",{respTransac})
      }else{
        res.json({message:"nada por aca para cargar"})
      }
      
    } catch (error) {
      res.send({messahe: `error transaccion  NO guardada `})
      res.send({message:"ERROR AL CARGAR TRANSACCIONES"})
    }
  }

  module.exports={
    addNewTransaction,
    getTransactions
  }