const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventarioSchema = new Schema({
    id: String,
    nombre: String,
    marca: String,
    modelo: String,
    cantidad: Number,
    precio: Number,
    categoria: String,
    fechaIngreso: String,
    antiguedad: String,
    FechaActualizacion: String

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Inventario', InventarioSchema);