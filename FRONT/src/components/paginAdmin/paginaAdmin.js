import './paginaAdmin.css';
import Header from '../header/header';
import { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus,faTrashCan,faPenToSquare,faUserPlus,faUserMinus,faUser,faKey,faXmark,faCheck} from '@fortawesome/free-solid-svg-icons'


let dato=""

const agrgarInfo = async(event)=>{
    event.preventDefault();
    const form=JSON.stringify({
        "nombre":event.target[0].value,
        "nombre_cient":event.target[1].value,
        "ecosistema":event.target[2].value,
        "PH":event.target[3].value,
        "tamano":event.target[4].value,
        "temp_min":event.target[5].value,
        "temp_max":event.target[6].value,
        
    })

    const response= await fetch('http://localhost:3200/agregarDatos',{
            method:'POST',
            body: form,
            headers:{
                
                'Content-Type':'application/json'
            }
            
        })

        .then((res)=>res.json())
        .then((data)=>{dato=data})
}




export default function PaginaAdmin() {
    return(
        <Fragment>

            <Header/>
            <section id="sec-btn-admin">
                <button type="button" id='btn-admin' >
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
    
                        <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>Ecosistema...</option>
                            <option value="1">Amazónico</option>
                            <option value="2">Agua dulce</option>
                            <option value="3">Agua salada</option>
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
                        <input class="form-control" type="file" id="formFile"/>
                    </div>
                </section>
            </form>
    
        </Fragment> 
    )
}

