import { Fragment } from 'react';
import './paginaAmazonico.css'
import Header from '../header/header';
import CuadroImagenes from '../cuadroImagenes/cuadroImagenes';



export default function PaginaAmazonico(){
    return(
        <Fragment>

            <Header/>
            <CuadroImagenes url1="https://historia.nationalgeographic.com.es/medio/2014/09/15/129orellana1_2000x1327.jpg" infoImg1="La Cuenca Amazónica dista de ser una extensión monótona de árboles; por el contrario, se trata de una red de paisajes y ecosistemas. Este mosaico único le da al área su riqueza biológica sin igual, y con ella, su valor global." url2="https://cdn.getyourguide.com/img/location/5ca8d08398ff0.jpeg/99.jpg" infoImg2="La cuenca amazónica genera entre el 16% al 20% del agua dulce del planeta, contiene el 25% de la biodiversidad terrestre, más especies de peces que cualquier otro sistema fluvial, 6.000 especies de animales y al menos 40.000 especies de plantas" url3="https://img.peapix.com/c3a16abb1b5f4547a55fd37af4b43cda.jpg?attachment&modal" infoImg3="El acuario biotopo o geográfico del Amazonas es sin lugar a dudas el acuario temático más común y extendido entre los aficionados a la acuariofilia de agua dulce. No puede ser de otro modo cuando de su cuenca y afluentes proceden algunas de las especies de peces ornamentales de agua dulce con más seguidores como pueden ser el Pez ángel Escalar, Pterophyllum scalare, el tetra neón, Paracheirodon axelrodi o el disco género Symphysodon"/>
            

        </Fragment>
    );
}