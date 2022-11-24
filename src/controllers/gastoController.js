const Gasto = require('../model/Gasto');





const createGasto = async(req, res) => {
     
    const {id, proyectoGasto, descripcion, categoria,fechaGasto,monto,cantidad} = req.body

    const newGasto = new Gasto({id, proyectoGasto, descripcion, categoria,fechaGasto,monto,cantidad})

    const gastoSaved = await newGasto.save()

    res.status(201).json(gastoSaved)

}

 const getGastos = async(req, res) => {
    const gastos = await Gasto.find()
    res.json(gastos)
}

 const updateGastoById = async(req, res) => {
    const updatedGasto = await Gasto.findByIdAndUpdate(req.params.gastoId, req.body, {
        new: true
    })
    res.status(200).json(updatedGasto)
    
}
const deleteGastoById = async(req, res) => {
    const {gastoId} = req.params;
    console.log("gasto" + gastoId)
    await Gasto.findByIdAndDelete(gastoId)
    res.status(204).json()
    
}


module.exports = {
    createGasto,
    getGastos,
    updateGastoById,
    deleteGastoById
}