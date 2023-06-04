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

const modificarDato = (req,res)=>{
    

  
        let{nombrePez,campo,nuevoDato}=req.body;

        if(campo=="imagen"){
            const img='http://localhost:3200/public/' + req.file.filename;

            
            
            dbConnection.query(`UPDATE peces SET imagen="${img}" WHERE nombre="${nombrePez}"`, (error,data)=>{
                if(error){
                     res.send("La imagen NO ha podido ser actualizada");
                 } else {
                    res.send("La imagen se ha actualizado correctamente!");
                }
            } 
            
            )


        } else{

            dbConnection.query(`UPDATE peces SET ${campo}="${nuevoDato}" WHERE nombre="${nombrePez}"`, (error,data)=>{
                if(error){
                    res.send("Los datos no han podido actualizarse " + error);
                } else {
                    res.send("Los datos se han actualizado correctamente!");
                }
        } 
        
        )};
    }

    const eliminarDato=(req,res)=>{
        const{nombrePez}=req.body;

        dbConnection.query(`DELETE FROM peces WHERE nombre="${nombrePez}"`,(error,data)=>{

            info=data.json;
            if(error){
                res.send("La información no ha sido eliminada" + error);
            }else{
                console.log("La información se ha eliminado correctamente");
                res.redirect('/peces');
            }
         } 
        )
    };
    



module.exports={peces,agregarDatos,modificarDato,eliminarDato};