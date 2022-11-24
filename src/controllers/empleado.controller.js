const Empleado = require('../model/Empleado');
const {validationResult} = require('express-validator');





const createEmpleado = async(req, res) => {
     
    const {id, nombre, cedula, puesto,fechaIngreso,rebajoCcss,rebajoPension,otrosRebajos,salarioBruto,salarioNeto,FechaActualizacion} = req.body


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const newEmpleado = new Empleado({id, nombre, cedula, puesto,fechaIngreso,rebajoCcss,rebajoPension,otrosRebajos,salarioBruto,salarioNeto,FechaActualizacion})

    const empleadoSaved = await newEmpleado.save()

    res.status(201).json(empleadoSaved)

}

const getEmpleados = async(req, res) => {
    const empleados = await Empleado.find()
    res.json(empleados)
}

const updateEmpleadoById = async(req, res) => {
    const updatedEmpleado = await Empleado.findByIdAndUpdate(req.params.empleadoId, req.body, {
        new: true
    })
    res.status(200).json(updatedEmpleado)
    
}

const deleteEmpleadoById = async(req, res) => {
    const {empleadoId} = req.params;
    console.log("id",empleadoId)
    await Empleado.findByIdAndDelete(empleadoId)
    res.status(204).json()
    
}

module.exports = {
    createEmpleado,
    getEmpleados,
    updateEmpleadoById,
    deleteEmpleadoById
}