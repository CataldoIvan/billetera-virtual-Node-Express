const{Schema,model}=require('mongoose')

const transaccionesSchema=new Schema({
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

module.exports=model("transacciones",transaccionesSchema)