const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    id: String,
    nombre: String,
    cedula: String,
    puesto: String,
    fechaIngreso: String,
    rebajoCcss: Number,
    rebajoPension:Number,
    otrosRebajos:Number,
    salarioBruto:Number,
    salarioNeto:Number,
    FechaActualizacion: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Empleado', EmpleadoSchema);