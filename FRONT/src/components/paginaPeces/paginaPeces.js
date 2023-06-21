import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import Cards from '../cards/cards'
import './paginaPeces.css';
import Header from '../header/header'
import Filter from "../filter/filter";


export default function PaginaPeces(){



    let [arr,setArr]=useState([]);


    let [resultado,setResultado]=useState([]);

    
    
    const traerPeces= async()=>{



        let peces= await fetch('http://localhost:3200/peces')
    
        
       
/*  ('http://localhost:3200/peces') */
        .then((res)=>res.json())
        .then(data=>{setArr(data);setResultado(data)})
        .catch(error => console.log("Se ha producido un error... " +error));
            return peces
        }


    useEffect(()=>{

        traerPeces();
       
        console.log(resultado)
            

     },[])
    
     const filtrar = (event)=>{
        
        let datoFiltro=event.target.value;
        if(event.target.checked){
            if(datoFiltro==="Amazónico"){
            let resultado = arr.filter((cat)=> cat.ecosistema === datoFiltro)
            setResultado(resultado);
            }
            if(datoFiltro==="Agua dulce"){
                let resultado = arr.filter((cat)=> cat.ecosistema === datoFiltro)
                setResultado(resultado);
            }
            if(datoFiltro==="Agua salada"){
                let resultado = arr.filter((cat)=> cat.ecosistema === datoFiltro)
                setResultado(resultado);
            }
            if(datoFiltro==="No filter"){
                let resultado = arr;
                setResultado(resultado);
            }
        }       
    }


    return (
        

         <Fragment>
            <Header/>
            <Filter filtro={filtrar}/>

            
                <section id="section-cards-paginaPeces">
                    <div id="cards-paginaPeces">
                        {resultado.map((dato)=>{
                            
                            return <Cards key={dato.ID} info={dato}/>
                        })}
                    </div>
                </section>
                        
         </Fragment>
        
        
    )
}




