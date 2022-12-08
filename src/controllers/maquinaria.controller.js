const Maquinaria = require('../model/Maquinaria');
const {validationResult} = require('express-validator');





const createMaquinaria = async(req, res) => {
     
    const {id, nombre, marca, categoria,fechaIngreso,vidaUtil,numeroReparaciones,estadoMaquinaria,historialMaquinaria,costoMaquina,depreciacionAnio,FechaActualizacion} = req.body


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const newMaquinaria = new Maquinaria({id, nombre, marca, categoria,fechaIngreso,vidaUtil,numeroReparaciones,estadoMaquinaria,historialMaquinaria,costoMaquina,depreciacionAnio,FechaActualizacion})

    const maquinariaSaved = await newMaquinaria.save()

    res.status(201).json(maquinariaSaved)

}

const getMaquinarias = async(req, res) => {
    const maquinarias = await Maquinaria.find()
    res.json(maquinarias)
}

const updateMaquinariaById = async(req, res) => {
    const updatedMaquinaria = await Maquinaria.findByIdAndUpdate(req.params.maquinariaId, req.body, {
        new: true
    })
    res.status(200).json(updatedMaquinaria)
    
}

const deleteMaquinariaById = async(req, res) => {
    const {maquinariaId} = req.params;
    console.log("id",maquinariaId)
    await Maquinaria.findByIdAndDelete(maquinariaId)
    res.status(204).json()
    
}

module.exports = {
    createMaquinaria,
    getMaquinarias,
    updateMaquinariaById,
    deleteMaquinariaById
}