const dbConnection = require('../config/dataBase');

const peces = (req,res)=>{
    dbConnection.query('SELECT * FROM peces',(error,data)=>{
        if(error){
            res.send(error);
        }else{
            res.send(data);
        }
    })
}

const agregarDatos=(req,res)=>{
    const{nombre,ecosistema,PH,temp_min,temp_max}=req.body;

    const img='http://localhost:3200/public/' + req.file.filename;

    dbConnection.query("INSERT INTO peces (nombre,ecosistema,PH,temp_min,temp_max,imagen) VALUES (?,?,?,?,?,?)",[nombre,ecosistema,PH,temp_min,temp_max,img],(error,data)=>{
        if(error){
            res.send(error);
        }else{
                  
            res.redirect('/peces');
            
        }
    })
}

module.exports={peces,agregarDatos};