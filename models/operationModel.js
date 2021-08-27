const mongoose = require("mongoose");
const operacionesSchema = new mongoose.Schema(
  {
    origen_id: {
      type: String,
      require: true,
    },
    destino_id: {
      type: String,
      require: true,
    },
    tipo_transaccion: {
      type: String,
      require: true,
    },
    monto: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("operaciones", operacionesSchema);

