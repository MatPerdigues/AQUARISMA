import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import Cards from '../cards/cards'
import './paginaPeces.css';
import Header from '../header/header'

export default function PaginaPeces(){

    let [datosPeces,setDatosPeces]=useState([]);
    

    
    
    const traerPeces= async()=>{
        let peces= await fetch('http://localhost:3200/peces')
        .then((res)=>res.json())
        .then(data=>setDatosPeces(data))
        .catch(error => console.log("Se ha producido un error... " +error))

        return peces
    }


    useEffect(()=>{
        
        traerPeces()
      
     },[])

      
    
    return (
        

        <Fragment>
            <Header/>
                <section id="section-cards-paginaPeces">
                    <div id="cards-paginaPeces">
                        {datosPeces.map((dato)=>{
                            return <Cards key={dato.ID} info={dato}/>
                        })}
                    </div>
                </section>
                        
         </Fragment>
        
        ) 
  
}



