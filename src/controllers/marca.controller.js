const Marca = require('../model/Marca');
const {validationResult} = require('express-validator');





const createMarca = async(req, res) => {
     
    const {code, name, FechaIngreso, HoraIngreso,fechaIngreso,FechaSalida,HoraSalida,TotalHorasLaboradas} = req.body


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const newMarca = new Marca({code, name, FechaIngreso, HoraIngreso,fechaIngreso,FechaSalida,HoraSalida,TotalHorasLaboradas})

    const marcaSaved = await newMarca.save()

    res.status(201).json(marcaSaved)

}

const getMarca = async(req, res) => {
    const marca = await Marca.find()
    res.json(marca)
}

const updateMarcaById = async(req, res) => {
    const updatedMarca = await Marca.findByIdAndUpdate(req.params.marcaId, req.body, {
        new: true
    })
    res.status(200).json(updatedMarca)
    
}


module.exports = {
    createMarca,
    getMarca,
    updateMarcaById
}