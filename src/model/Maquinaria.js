const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaquinariaSchema = new Schema({
    id: String,
    nombre: String,
    marca: String,
    categoria: String,
    fechaIngreso: String,
    vidaUtil: Number,
    numeroReparaciones:Number,
    estadoMaquinaria:String,
    costoMaquina:Number,
    depreciacionAnio:Number,
    FechaActualizacion: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Maquinaria', MaquinariaSchema);