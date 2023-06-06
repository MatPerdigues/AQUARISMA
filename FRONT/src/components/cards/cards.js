import { Fragment } from "react"
import './cards.css'

export default function Cards ({info}){
    return(
        <Fragment>
            
            <div id="div-cards">
                <section id="sec-espacio-imagen">
                    <div id="espacio-imagen">
                       <img id="img-cards" src={info.imagen} alt={info.nombre}/> 
                       <div id="espacio-blanco">
                        <p>BLABLA</p>
                        <p>BLABLA</p>
                        <p>BLABLA</p>
                       </div>
                    </div>
                    
                     
                
                    
                </section>
                <h3 id="nombre-cards">{info.nombre}</h3>
                

            </div>

            
          
           

        </Fragment>
    )
}