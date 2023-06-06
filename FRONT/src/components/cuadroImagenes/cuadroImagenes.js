import './cuadroImagenes.css'

export default function CuadroImagenes(props){

    
    
    return(
        <section id='secCuadro'>
            <div class="divCuadro">
                <img src={props.url1} alt='img_Amazonico1' class="imagenesCuadro" id="imgCuadro1"/>
                <div class='divInfoImg' id='infoImg1'>
                    <h4>{props.infoImg1}</h4>
                </div>
            </div> 
            <div class="divCuadro" id="divCuadro2">
                <img src={props.url2} alt='img_Amazonico2' class="imagenesCuadro"/>
                <div class='divInfoImg' id='infoImg2'>
                    <h4>{props.infoImg2}</h4>
                </div>
            </div>
            <div class="divCuadro" id="divCuadro3">
                <img src={props.url3} alt='img_Amazonico3' class="imagenesCuadro"/>
                <div class='divInfoImg' id='infoImg3'>
                    <h4>{props.infoImg3}</h4>
                </div>
            </div>
        </section>
)};

/* window.onscroll = function() {
    scroll();

};

function scroll() {
    if (document.documentElement.scrollTop > 295) {
        document.getElementById("divCuadro2").className ="slideUp";
    }
    if(document.documentElement.scrollTop > 1000){
        document.getElementById("divCuadro3").className="slideUp"
    }
    }    */ 