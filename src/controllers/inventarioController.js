const Inventario = require('../model/Inventario');
const {validationResult} = require('express-validator');



const createInventario = async(req, res) => {
     
    const {id, nombre, marca, modelo, cantidad, precio, categoria, fechaIngreso, antiguedad, FechaActualizacion} = req.body
    
    const newInventario = new Inventario({id, nombre, marca, modelo, cantidad, precio, categoria, fechaIngreso, antiguedad, FechaActualizacion})

    const inventarioSaved = await newInventario.save()

    res.status(201).json(inventarioSaved)

}


const getInventario = async(req, res) => {
    const inventario = await Inventario.find()
    res.json(inventario)
}

 const updateInventarioById = async(req, res) => {
    console.log("inventarios" + req.params.inventarioId)
    const updatedInventario = await Inventario.findByIdAndUpdate(req.params.inventarioId, req.body, {
        new: true
    })
    res.status(200).json(updatedInventario)
    
}

const deleteInventarioById = async(req, res) => {
    const {inventarioId} = req.params;
    console.log(inventarioId)
    await Inventario.findByIdAndDelete(inventarioId)
    res.status(204).json()
    
}


module.exports = {
    createInventario,
    getInventario,
    updateInventarioById,
    deleteInventarioById
}