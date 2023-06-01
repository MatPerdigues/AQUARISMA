const express=require('express');
const router=express.Router();
const upload=require('../multer/multer') 

const {peces,agregarDatos} = require('../controllers/controllers')

router.get('/peces',peces);

router.post('/agregarDatos',upload.single('imagen'),agregarDatos)


module.exports=router;