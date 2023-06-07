import { Fragment } from "react"
import './cards.css'

export default function Cards ({info}){

    

    
     

    return(

         
        <Fragment>
            
            <section id="div-cards">
                <div id="img-cards">
                    <img id="imagen-cards" src={info.imagen} alt={info.nombre}/>
                    <div id="p-cards">
                        <p class="p-cards">PH: {info.PH}</p>
                        <p class="p-cards">Ecosistema: {info.ecosistema}</p>
                        <p class="p-cards">Nombre científico: {info.nombre_cient}</p>
                        <p class="p-cards">Tamaño (cm): {info.tamaño}</p>
                        <p class="p-cards">Temperatura mínima (°C): {info.temp_min}</p>
                        <p class="p-cards">Temperatura máxima (°C): {info.temp_max}</p>
                    </div>
                </div>
                
                <h3 id="nombre-cards">{info.nombre}</h3>
                

            </section>

            

        </Fragment>
        
    )
}