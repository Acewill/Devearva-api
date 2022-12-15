const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GastoSchema = new Schema({
    id: String,
    proyectoGasto: String,
    descripcion: String,
    categoria: String,
    fechaGasto: String,
    monto: Number,
    cantidad:Number
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Gasto', GastoSchema);