const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/obtenerTareas', async(req,res) => {
   const tasks = await Task.find();
   res.json(tasks);
});

router.post('/cargarTarea',async(req,res)=> {
    const task = new Task(req.body);
    await task.save();
    res.json({status:'Tarea cargada con exito'});
})

router.put('/modificarTarea/:id', async(req,res) => {
    await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        status:'Tarea actualizada'
    });
});

router.delete('/eliminarTarea/:id', async(req,res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status:'Tarea eliminada'
    })
})
module.exports = router;