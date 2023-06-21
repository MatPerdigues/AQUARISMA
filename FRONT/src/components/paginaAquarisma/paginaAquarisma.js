import "./paginaAquarisma.css";
import { Fragment } from "react";
import Header from "../header/header";

export default function PaginaAquarisma(){
    
    
    return(

        <Fragment>
            <Header/>
            <section class="sec-infoAquarisma">
                <div class="img-infoAquarisma"></div>
                <div class="texto-infoAquarisma">
                    <p class="p-infoAquarisma"><span id="spanAquarisma"> Aquarisma pretende ser un lugar de encuentro y referencia para quienes aman la naturaleza y lo expresan dandole vida a nuestros acuarios. En este sitio vas a poder disfrutar nuestros acuarios, conocer más acerca de los ecosistemas que les dan origen y nos inspiran en sus diseños y, por encima de todo, conocer a sus protagonistas, sus habitantes...nuestros peces.</span></p>
                </div>

            </section>
            
        
        </Fragment>
    )
}