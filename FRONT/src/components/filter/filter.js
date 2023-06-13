import './filter.css';
import { Fragment } from 'react';
import { FaFish} from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFishFins,faOtter,faFilterCircleXmark} from '@fortawesome/free-solid-svg-icons'





export default function Filter ({filtro,}){

   


    return(


  
        <Fragment>

            <section id="sec-btn-filter">

                <div id="btn1">
                    <input type="radio" class="btn-check" name='options' id="btn-check" autocomplete="off" value="Amazónico" onChange={filtro}/>
                    <label class="btn btn-warning" for="btn-check"><FaFish class="fish"/><span class="span-filter">Amazónicos</span></label>
                </div>

                <div id="btn2">
                    <input type="radio" class="btn-check" name='options' id="btn-check2" autocomplete="off" value="Agua dulce" onChange={filtro}/>
                    <label class="btn btn-warning" for="btn-check2"><FontAwesomeIcon icon={faFishFins} class="fish"/><span id="span-filter2">Agua Dulce</span></label>
                </div>

                <div id="btn3">
                    <input type="radio" class="btn-check" name='options' id="btn-check3" autocomplete="off" value="Agua salada" onChange={filtro}/>
                    <label class="btn btn-warning" for="btn-check3"><FontAwesomeIcon icon={faOtter} class="fish"/><span id="span-filter2">Agua Salada</span></label>
                </div>

                <div id="btn4">
                    <input type="radio" class="btn-check" name='options' id="btn-check4" autocomplete="off" value="No filter" onChange={filtro}/>
                    <label class="btn btn-warning" for="btn-check4"><FontAwesomeIcon icon={faFilterCircleXmark} id='icon4'/><span id="span-filter4">No Filter</span></label>
                </div>

            </section>
            

            


                


                

        </Fragment>
   
    )
    

}

