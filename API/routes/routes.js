const express=require('express');
const router=express.Router();
const upload=require('../multer/multer') 

const {peces,agregarDatos,modificarDato,eliminarDato} = require('../controllers/controllers')

router.get('/peces',peces);

router.post('/agregarDatos',upload.single('imagen'),agregarDatos);

router.put('/modificarDato',upload.single('imagen'),modificarDato);

router.delete('/eliminarDato',eliminarDato);


module.exports=router;