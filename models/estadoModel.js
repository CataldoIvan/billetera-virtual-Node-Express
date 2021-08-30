const mongoose=require("mongoose")
const estadoSchema=new mongoose.Schema(
    {
        id:{
            type:Number,
            require:true
        },
        nombre:{
            type:String,
            require:true
        }
    }
)

module.exports=mongoose.model("estados",estadoSchema)