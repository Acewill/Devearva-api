const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarcaSchema = new Schema({
    code: String,
    name: String,
    FechaIngreso: String,
    HoraIngreso: String,
    fechaIngreso: String,
    FechaSalida: String,
    HoraSalida:String,
    TotalHorasLaboradas:String

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Marca', MarcaSchema);