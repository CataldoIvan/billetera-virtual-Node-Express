const mongoose = require("mongoose");
const transaccionesSchema = new mongoose.Schema(
  {
    transaccion_id: {
      type: String,
      require: true,
    },
    nombre: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transacciones", transaccionesSchema);

