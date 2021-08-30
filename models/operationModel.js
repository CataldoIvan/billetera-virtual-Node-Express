const mongoose = require("mongoose");
const operacionesSchema = new mongoose.Schema(
  {
    origen_id: {
      type: String,
      require: true,
    },
    origen_nombre: {
      type: String,
      require: true,
    },
    destino_id: {
      type: String,
      require: true,
    },
    destino_nombre: {
      type: String,
      require: true,
    },
    tipo_transaccion: {
      type: Number,
      require: true,
    },
    monto: {
      type: Number,
    },
    estado:{
      type:Number
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("operaciones", operacionesSchema);

