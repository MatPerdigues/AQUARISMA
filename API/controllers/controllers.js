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

    dbConnection.query("INSERT INTO peces (nombre,nombre_cient,ecosistema,PH,temp_min,temp_max,tamaño,imagen) VALUES (?,?,?,?,?,?,?,?)",[nombre,nombre_cient,ecosistema,PH,temp_min,temp_max,tamano,img],(error,data)=>{
        if(error){
            res.send(error);
        }else{
                  
            res.json(`Datos cargados correctamente!`);
            
        }
    })
}

const modificarDato = (req,res)=>{
    

  
        let{nombrePez,campo,nuevoDato}=req.body;

        if(campo=="imagen"){
            const img='http://localhost:3200/public/' + req.file.filename;

            dbConnection.query(`UPDATE peces SET imagen="${img}" WHERE nombre="${nombrePez}"`, (error,data)=>{
                if(error){
                     res.jon("La imagen NO ha podido ser actualizada");
                 } else {
                    res.json("La imagen se ha actualizado correctamente!" + (img));
                }
            } 
            
            )


        } else{

            dbConnection.query(`UPDATE peces SET ${campo}="${nuevoDato}" WHERE nombre="${nombrePez}"`, (error,data)=>{
                if(error){
                    res.json("Los datos no han podido actualizarse " + error);
                } else {
                    res.json("Los datos se han actualizado correctamente!");
                }
        } 
        
        )};
    }

    const busquedaXnombre=(req,res)=>{
        const{nombrePez}=req.body;

        dbConnection.query(`SELECT * FROM peces WHERE nombre="${nombrePez}"`,(error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data);
            }    
        })

    }

    const eliminarDato=(req,res)=>{
        const{nombrePez}=req.body;

        dbConnection.query(`DELETE FROM peces WHERE nombre="${nombrePez}"`,(error,data)=>{

           
            if(error){
                res.json("La información no ha sido eliminada, intentá nuevamente" + error);
            }else{
                res.json("La información se ha eliminado correctamente!");
                
            }
         } 
        )
    };

    const registrarAdmin= async (req,res)=>{
        const {user,password}=req.body;
        const passEncriptada= await bcrypt.hash(password,10);

        dbConnection.query(`SELECT * FROM admins WHERE usuario="${user}"`,(error,data)=>{
            if(error){
                res.send(error);
            }else{
                if(data.length>0){
                    res.json("Ya existe un Admin con ese usuario")
                }else{
                     
    
                    dbConnection.query('INSERT INTO admins (usuario,password) VALUES(?,?)',[user,passEncriptada],(error,data)=>{
                        if(error){
                            res.send(error);
                        }else{
                            res.json("Administrador registrado correctamente")
                        }
                    }
                    )
                }
            }
        })
     }

     

     const buscarAdmin = (req,res)=>{
        const {usuario}=req.body;
        dbConnection.query(`SELECT * FROM admins WHERE usuario="${usuario}"`,(error,data)=>{
            if(error){
                res.send(error);

            }else{
                if(data.length===0){
                    res.json("Admin no registrado")
                }else{
                    res.send(data);
                }
            }
        })
     }

    const borrarAdmin = (req,res)=>{
        const{usuario}=req.body;
        dbConnection.query(`DELETE FROM admins WHERE usuario="${usuario}"`,(error,data)=>{

           
 
             if(error){
                res.send("Hubo un error" + error)
            }else{
                res.json(`El Admin ${usuario} se ha eliminado correctamente!`);
            } 
        })
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
                            res.send({
                                mensaje:("Usuario logeado!"),
                                claveToken:token
                            }) 
                           

                        }
                    })
                }else{
                    res.json("Contraseña incorrecta")
                }
            }
            }
        })

    }



    const verificacionUsuario=(req,res,next)=>{

        const authToken=req.headers.authorization;
        const token=authToken.split(" ").pop(); //debido a que al mostrar por consola el token se entrega con "bearer" al principio, se utiliza el split y el pop para quedarnos solo con la última parte (token)
        //console.log(authToken);
        
         
        jwt.verify(token,PASS_SEGURA,(error,data)=>{ //process.env.PASS_SEGURA
            if(error){
                if(error.name=="TokenExpiredError"){return res.json("Expiro el tiempo, por favor volver a logearse")}
                /* res.send(error); */
                else{res.json(error)}
            }else{
                
                next();
            }
        })
    
    }



module.exports={peces,agregarDatos,modificarDato,eliminarDato,registrarAdmin,login,busquedaXnombre,buscarAdmin,borrarAdmin,verificacionUsuario};