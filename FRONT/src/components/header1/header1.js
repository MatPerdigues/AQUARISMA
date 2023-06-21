import "./header1.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faKey,faUser,faCheck,faXmark} from '@fortawesome/free-solid-svg-icons'

export default function Header1 (){


    const mostrar = ()=>{
        
        document.getElementById('sec-datos-login').style.display='block'; 
        
    }

    
    return(
        <Fragment>
            <section>
                <section class="secSuperiorHeader">
                    <div id="tituloHeader">
                        <h1 id="h1Header"><Link to="/"><span id="spanHeader">AQUARISMA</span></Link></h1>
                    </div>
                    <button onClick={mostrar} type="button" id='btn-login' class="btn-login">
                        <FontAwesomeIcon icon={faKey} id='icon-login'/>
                        <span id='span-login'>Login</span>
                    </button>
                    

                </section>
            </section>
        </Fragment>
    )
}