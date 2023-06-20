const express=require('express');
const router=express.Router();
const upload=require('../multer/multer') 

const {peces,agregarDatos,modificarDato,eliminarDato,registrarAdmin,login, busquedaXnombre,buscarAdmin,borrarAdmin,verificacionUsuario} = require('../controllers/controllers')

router.get('/peces',peces);

router.post('/busquedaXnombre',busquedaXnombre);

router.post('/agregarDatos',verificacionUsuario,upload.single('imagen'),agregarDatos);

router.put('/modificarDato',verificacionUsuario,upload.single('imagen'),modificarDato);

router.delete('/eliminarDato',verificacionUsuario,eliminarDato);

router.post('/registrarAdmin',verificacionUsuario,registrarAdmin);

router.post('/login',login);

router.post('/buscarAdmin',buscarAdmin);

router.delete('/borrarAdmin',verificacionUsuario,borrarAdmin);


module.exports=router;