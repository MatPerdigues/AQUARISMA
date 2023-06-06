import './header.css';
import { Fragment } from 'react';
import img1 from'../images/amazonia.jpg'
import img2 from '../images/escalar.jpg'
import img3 from '../images/amazonico.jpg'
import img4 from '../images/coral.jpg'
import img5 from '../images/angel.jpg'
import img6 from '../images/marino.jpg'
import img7 from '../images/lago.jpg'
import img8 from '../images/betta.jpg'
import img9 from '../images/acuario_dulce.jpg'
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <Fragment>

            
                <header id="headerHome">

                    <section id="secSuperiorHeader">
                        
                        <div id="tituloHeader">
                            <h1 id="h1Header"><Link to="/"><span id="spanHeader">AQUARISMA</span></Link></h1>
                        </div>

                    </section>
                    
                    <section id='secInferior1'>

                        <div id='secInferior1-div1' class="encabezado">
                            <p id='p1' class="pHeader">ECOSISTEMA AMAZÓNICO</p>
                            <div id='secInferior1-div2' class="menuSecInferior">
                                <section class="subMenuSecInferior">
                                    <Link to="/ecosistemaAmazonico" class="linkHeader"><div>
                                        <div class="imgSecInferior">
                                            <img src={img1} alt='img_Amazona'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior1">Visitá los ecosistemas que inspiran a nuestros acuarios</p> 
                                        
                                    </div></Link>
                                    
                                    <Link to="/peces"><div>
                                        <div class="imgSecInferior">
                                            <img src={img2} alt='img_escalar'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior2"> Conocé a los protagonistas de este ecosistema </p>
                                    </div></Link>


                                    <div>
                                        <div class="imgSecInferior">
                                            <img src={img3} alt='img_amazonico'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior3">Sumergite en nuestros acuarios</p>
                                    </div>
                                    
           
                                </section>

                                <section class='lineaSecInferior'>
                                    <div></div>
                                    <p class="pLineaInferior">Acerca de AQUARISMA</p>
                                </section>
 
                            </div>
                            
                           
                        </div>
                        

                    </section>

                    <section id='secInferior2'>

                        <div id='secInferior2-div1' class="encabezado">
                            <p id='p2' class="pHeader">ECOSISTEMA MARINO</p>
                            <div id='secInferior2-div2' class="menuSecInferior">
                            <section class="subMenuSecInferior">
                                   <Link to="/ecosistemaOceanico" class="linkHeader"><div>
                                        <div class="imgSecInferior">
                                            <img src={img4} alt='img_coral'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior1">Visitá los ecosistemas que inspiran a nuestros acuarios</p> 
                                        
                                    </div></Link>
                                    
                                    <div>
                                        <div class="imgSecInferior">
                                            <img src={img5} alt='img_pez_angel'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior2"> Conocé a los protagonistas de este ecosistema </p>
                                    </div>
                                    <div>
                                        <div class="imgSecInferior">
                                            <img src={img6} alt='img_acurario_marino'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior3">Sumergite en nuestros acuarios</p>
                                    </div>
                                    
           
                                </section>

                                <section class='lineaSecInferior'>
                                    <div></div>
                                    <p class="pLineaInferior">Acerca de AQUARISMA</p>
                                </section> 
                            </div>
                        </div>

                    </section>

                    <section id='secInferior3'>

                        <div id='secInferior3-div1' class="encabezado">
                            <p id='p3' class="pHeader">ECOSISTEMAS DE AGUA DULCE</p>
                            <div id='secInferior3-div2' class="menuSecInferior">
                            <section class="subMenuSecInferior">
                                    <Link to="/ecosistemaDulce" class="linkHeader"><div>
                                        <div class="imgSecInferior">
                                            <img src={img7} alt='img_lago'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior1">Visitá los ecosistemas que inspiran a nuestros acuarios</p> 
                                        
                                    </div></Link>
                                    
                                    <div>
                                        <div class="imgSecInferior">
                                            <img src={img8} alt='img_betta'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior2"> Conocé a los protagonistas de este ecosistema </p>
                                    </div>
                                    <div>
                                        <div class="imgSecInferior">
                                            <img src={img9} alt='img_acuario_dulce'></img>
                                        </div>
                                        <p class="pSecInferior" id="pSecInferior3">Sumergite en nuestros acuarios</p>
                                    </div>
                                    
           
                                </section>

                                <section class='lineaSecInferior'>
                                    <div></div>
                                    <p class="pLineaInferior">Acerca de AQUARISMA</p>
                                </section> 
                            </div>
                        </div>

                    </section>

                    

                </header>
            
        
        </Fragment>
    )
}
