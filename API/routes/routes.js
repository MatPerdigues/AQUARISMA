const express=require('express');
const router=express.Router();
const upload=require('../multer/multer') 

const {peces,agregarDatos,modificarDato,eliminarDato,registrarAdmin,login, busquedaXnombre} = require('../controllers/controllers')

router.get('/peces',peces);

router.post('/busquedaXnombre',busquedaXnombre);

router.post('/agregarDatos',upload.single('imagen'),agregarDatos);

router.put('/modificarDato',upload.single('imagen'),modificarDato);

router.delete('/eliminarDato',eliminarDato);

router.post('/registrarAdmin',registrarAdmin);

router.post('/login',login);


module.exports=router;