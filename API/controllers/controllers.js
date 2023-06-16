const dbConnection = require('../config/dataBase');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const PASS_SEGURA = process.env.PASS_SEGURA;



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
    const{nombre,ecosistema,PH,temp_min,temp_max,tamano,nombre_cient}=req.body;

    const img='http://localhost:3200/public/' + req.file.filename;

    dbConnection.query("INSERT INTO peces (nombre,nombre_cient,ecosistema,PH,temp_min,temp_max,imagen,tamaño) VALUES (?,?,?,?,?,?,?,?)",[nombre,nombre_cient,ecosistema,PH,temp_min,temp_max,img,tamano],(error,data)=>{
        if(error){
            res.send(error);
        }else{
                  
            res.jason('Datos cargados correctamente!');
            
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
                    res.send("La imagen se ha actualizado correctamente!" + (img));
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

           
            if(error){
                res.send("La información no ha sido eliminada" + error);
            }else{
                console.log("La información se ha eliminado correctamente");
                res.redirect('/peces');
            }
         } 
        )
    };

    const registrarAdmin=async (req,res)=>{
        const {user,password}=req.body;
    
        const passEncriptada= await bcrypt.hash(password,10); 
    
        dbConnection.query('INSERT INTO admins (usuario,password) VALUES(?,?)',[user,passEncriptada],(error,data)=>{
            if(error){
                res.send(error);
            }else{
                res.send("Administrador registrado correctamente")
            }
        }
        )
    }

    
    const login = (req,res)=>{
        const{user,password}=req.body;
    
        dbConnection.query("SELECT * FROM admins WHERE usuario=?",[user],async(error,data)=>{
            if(error){
                res.send("Error en el servidor " + error)
            }else{
                if(data.length==0){
                    res.json("Usuario no registrado");
                }else{
    
                
                
                let info=data[0];
                const passOk=await bcrypt.compare(password,info.password)
                
                if(passOk){
                    
                    jwt.sign({user},PASS_SEGURA,{expiresIn:'10m'},(error,token)=>{
                        if(error){
                            res.send(error)
                        }else{
                            res.json(`Usuario logeado!`)

                               /*  {mensaje:`Usuario ${user} logeado!`,
                                tokenLogIn:token} */
                            
                        }
                    })
                }else{
                    res.json("Contraseña incorrecta")
                }
            }
            }
        })
    }



module.exports={peces,agregarDatos,modificarDato,eliminarDato,registrarAdmin,login};