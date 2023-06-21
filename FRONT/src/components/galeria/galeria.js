import "./galeria.css";
import Header from "../header/header"
import { Fragment } from "react";


/* import img10 from '../images/AmazHEdit1.jpg'
import img11 from '../images/AmazHEdit3.jpg' */

export default function Galeria({src1,src2,src3,src4}){
    

    return(
        <Fragment>
            <Header/>
            <section class="sec-galeria">
                <div class="img-galeria1">
                    <img src={src1} alt="Acuario Amazónico"></img>
                   
                </div>
                <div class="img-galeria1" id="img-gleria2">
                    <img src={src2} alt="Acuario Amazónico"></img> 
                </div>
                <div class="img-galeria2">
                    <img src={src3} alt="Acuario Amazónico"></img> 
                </div>
                <div class="img-galeria3">
                   <img src={src4} alt="Acuario Amazónico"></img> 
                </div>
            </section>
        </Fragment>
    )
}

