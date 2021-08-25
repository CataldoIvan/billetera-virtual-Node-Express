const mongoose=require('mongoose')

const transaccionesSchema=mongoose.Schema({
    origen_id:{
        type:String,
        require:true
    },
    destino_id:{
        type:String,
        require:true
    },
    tipo_transaccion:{
        type:String,
        require:true
    },
    motivo:{
        type:String
    }
    
},{
    timestamps:true
})

module.exports=mongoose.model("transacciones",transaccionesSchema)