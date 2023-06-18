import './paginaAdmin.css';
import Header from '../header/header';
import { Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus,faTrashCan,faPenToSquare,faUserPlus,faUserMinus,faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';






export default function PaginaAdmin() {

    const[busqueda,SetBusqueda]=useState(['']);
    const[img,setImg]=useState(null)
    
    let esconder=true;

    let infoDelete="";
    let dato="";

    const handleChange=(event)=>{
        setImg(event.target.files[0]);
    }

    console.log(img);

    
    
    const buscar = async (event)=>{
        event.preventDefault();

        console.log(event.target[0].value);
        const formBusqueda = JSON.stringify({
            "nombrePez":event.target[0].value    
        })

        const response = await fetch('http://localhost:3200/busquedaXnombre',{
            method:"POST",
            body:formBusqueda,
            headers:{
                
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>SetBusqueda(data))

        document.getElementById("form-buscar-info").style.display="none";

        document.getElementById("sec-borrar-info").style.display="block";

    }

    

  
    if(busqueda.length===0){
        alert("No existe el registro buscado")
    } else{
        esconder=false;
        
    }

    const eliminarInfo = async(event)=>{
        event.preventDefault();
        const formDelete = JSON.stringify({
            "nombrePez":busqueda[0].nombre
        })

        const response = await fetch('http://localhost:3200/eliminarDato',{
            method:"DELETE",
            body:formDelete,
            headers:{
                
                'Content-Type':'application/json'
            }
        })

        .then((res)=>res.json())
        .then((data)=>infoDelete = data);

        document.getElementById("sec-borrar-info").style.display="none"

        alert(infoDelete);
        
        window.location.reload(true);
    }

   
   
     

    const agrgarInfo = async(event)=>{
        event.preventDefault();
        
        const form = new FormData();
        form.append('imagen',img);
        form.append("nombre",event.target[0].value);
        form.append("nombre_cient",event.target[1].value);
        form.append("ecosistema",event.target[2].value);
        form.append("PH",event.target[3].value);
        form.append("tamano",event.target[4].value);
        form.append("temp_min",event.target[5].value);
        form.append("temp_max",event.target[6].value);
        


        const response= await fetch('http://localhost:3200/agregarDatos',{
                method:'POST',
                body: form,
                         
            })

            .then((res)=>res.json())
            .then((data)=>{dato=data})

            console.log(dato);
            alert(dato);

            document.getElementById("form-info").reset();

            document.getElementById("form-info").style.display="none"
        
        } 
        
        
        
        const ocultar= event=>{
        
            if( event.currentTarget.id==="btn-cerrar-info"){
                document.getElementById("form-info").style.display="none";
            }
            if(event.currentTarget.id==="btn-cerrar-info1"){
                document.getElementById("form-buscar-info").style.display="none";
            }

            if(event.currentTarget.id==="btn-submit1"){
                
                document.getElementById("form-buscar-info").style.display="none";
            }
            if(event.currentTarget.id==="btn-cerrar-info2"){
                document.getElementById("sec-borrar-info").style.display="none";
            }
            
        
    }

    const mostrar=event=>{

        console.log(event.currentTarget.id)
        if(event.currentTarget.id==="btn-admin"){
            document.getElementById("form-info").style.display="block";
        }
        if(event.currentTarget.id==="btn-admin1"){
            document.getElementById("form-buscar-info").style.display="block";
        }
        
    }
    
    
    return(
        <Fragment>

            <Header/>
            <section id="sec-btn-admin">
                <button type="button" id='btn-admin' onClick={mostrar} class="btn-admin">
                    <FontAwesomeIcon icon={faSquarePlus} id='icon-login'/>
                    <span id='span-admin'>+ info</span>
                </button>
                <button type="button" id='btn-admin1' class="btn-admin" onClick={mostrar}>
                    <FontAwesomeIcon icon={faTrashCan} id='icon-login'/>
                    <span id='span-admin'>- info</span>
                </button>
                <button type="button" id='btn-admin' >
                    <FontAwesomeIcon icon={faPenToSquare} id='icon-login'/>
                    <span id='span-admin3'>Actualizar</span>
                </button>
                <button type="button" id='btn-admin' >
                    <FontAwesomeIcon icon={faUserPlus} id='icon-login'/>
                    <span id='span-admin4'>+Adm</span>
                </button>
                <button type="button" id='btn-admin' >
                    <FontAwesomeIcon icon={faUserMinus} id='icon-login'/>
                    <span id='span-admin5'>-Adm</span>
                </button>
            </section>
            
            <form id='form-info'method='POST' onSubmit={(event)=>{agrgarInfo(event)}} class="form-admin">
                <section id="sec1-form-info">
                    <p class='titulo-form-admin'>Agregá información de un nuevo pez a nuestra Base de Datos</p>
                    
                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Nombre...' name="nombre"/>
                    </div>
                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Nombre científico...' name="nomCient"/>
                    </div>
                    <div class="input-group">
                    <span class="input-group-text" id='span-select'></span>
    
                        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" required>
                            <option selected>Ecosistema...</option>
                            <option value="Amazónico">Amazónico</option>
                            <option value="Agua dulce">Agua dulce</option>
                            <option value="Agua salada">Agua salada</option>
                        </select>
                        
                    </div>

                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='PH...' name="ph"/>
                    </div>
                    
                </section>

                <section id="sec2-form-info">
                    
                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Tamaño (cm)...' name="tamano"/>
                    </div>
                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Temperatura mínima...' name="tempMin"/>
                    </div>
                    <div class="input-group mb-3" id='input-admin1'>
                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                        <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Temperatura máxima...' name="tempMax"/>
                    </div>
                    <div class="mb-3" id='file-form-info'>
                        <label for="formFile" class="form-label" id='label-formFile'>Imagen</label>
                        <input class="form-control" type="file" id="formFile" name='imagen' onChange={handleChange}/>
                    </div>
                </section>
                <div class='div-btns-info'>
                    <button type='button' id='btn-cerrar-info' class="btn-cerrar-info" onClick={ocultar}><FontAwesomeIcon icon={faXmark}/></button>
                    <button type="submit" id='btn-submit' class="btn-submit"><FontAwesomeIcon icon={faCheck} onClick={ocultar}/></button>
                </div>
            </form>

            <form class="form-admin" id='form-buscar-info' onSubmit={(event)=>buscar(event)}>
                <p class='titulo-form-admin' id="p-borrar-info">Agregá el nombre de un pez para borrar su informción</p>
                <div class="input-group mb-3" id='input-admin1'>
                    <span class="input-group-text" id="inputGroup-sizing-default"></span>
                    <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Nombre...' name="nombre"/>
                </div>
                <div class="div-btns-info" id='div-btns-info1'>
                    <button type='button' id='btn-cerrar-info1' class="btn-cerrar-info" onClick={ocultar}><FontAwesomeIcon icon={faXmark}/></button>
                    <button type="submit" id='btn-submit1' class="btn-submit" ><FontAwesomeIcon icon={faCheck}/></button>
                </div>
            </form>

            {esconder===false?
            
            <section class='form-admin' id='sec-borrar-info'>
                <p id='p-sec-borrar'>Estás a punto de eliminar la siguiente información:</p>

                <section id="div-cards">
                    <section id='sec-borrar-card'>
                        <div id="img-cards">
                            <img id="imagen-cards" src={busqueda[0].imagen} alt={busqueda[0].nombre}/>
                            
                            <div id="p-cards">
                                <p class="p-cards">PH: {busqueda[0].PH}</p>
                                <p class="p-cards">Ecosistema: {busqueda[0].ecosistema}</p>
                                <p class="p-cards">Nombre científico: {busqueda[0].nombre_cient}</p>
                                <p class="p-cards">Tamaño (cm): {busqueda[0].tamaño}</p>
                                <p class="p-cards">Temperatura mínima (°C): {busqueda[0].temp_min}</p>
                                <p class="p-cards">Temperatura máxima (°C): {busqueda[0].temp_max}</p>
                            </div>
                        </div>
                
                        <h3 id="nombre-cards">{busqueda[0].nombre}</h3>
                </section>

            </section>
                <div class="div-btns-info" id='div-btns-info2'>
                    <button type='button' id='btn-cerrar-info2' class="btn-cerrar-info" onClick={ocultar}><FontAwesomeIcon icon={faXmark}/></button>
                    <button type="button" id='btn-submit2' class="btn-submit" onClick={eliminarInfo}><FontAwesomeIcon icon={faCheck}/></button>
                </div>

            </section>

            : ''}

            
    
        </Fragment> 
    )
}

