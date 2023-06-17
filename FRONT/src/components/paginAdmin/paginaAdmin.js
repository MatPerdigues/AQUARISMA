import './paginaAdmin.css';
import Header from '../header/header';
import { Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus,faTrashCan,faPenToSquare,faUserPlus,faUserMinus,faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';




export default function PaginaAdmin() {


    const[img,setImg]=useState(null)

    let dato=""

    const handleChange=(event)=>{
        setImg(event.target.files[0]);
        

    }

    console.log(img);
 
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
        
        } 
        
        
        const ocultar= event=>{
        
        if( event.currentTarget.id==="btn-cerrar-info"){
            document.getElementById("form-info").style.display="none";
        }
        
    }

    const mostrar=event=>{
        if(event.currentTarget.id==="btn-admin"){
            document.getElementById("form-info").style.display="block";
        }
        
    }
    
    
    return(
        <Fragment>

            <Header/>
            <section id="sec-btn-admin">
                <button type="button" id='btn-admin' onClick={mostrar}>
                    <FontAwesomeIcon icon={faSquarePlus} id='icon-login'/>
                    <span id='span-admin'>+ info</span>
                </button>
                <button type="button" id='btn-admin' >
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
            
            <form id='form-info'method='POST' onSubmit={(event)=>{agrgarInfo(event)}}>
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
                <div id='div-btns-info'>
                    <button type='button' id='btn-cerrar-info' onClick={ocultar}><FontAwesomeIcon icon={faXmark}/></button>
                    <button type="submit" id='btn-submit'><FontAwesomeIcon icon={faCheck} onClick={ocultar}/></button>
                </div>
            </form>
    
        </Fragment> 
    )
}

