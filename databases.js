const mongoose=require('mongoose')
const MONGODB_URI='mongodb://localhost/actividades'

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(db=>console.log("database conectada"))
.catch(err=>console.log("error",err))