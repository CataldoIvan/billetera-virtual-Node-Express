const mongoose = require("mongoose");
const operacionesOwnSchema = new mongoose.Schema(
  {
    origen_id: {
      type: String,
      require: true,
    },
    tipo_transaccion: {
      type: Number,
      require: true,
    },
    moneda: {
      type: Number,
    },
    monto: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OwnsOperaciones", operacionesOwnSchema);

