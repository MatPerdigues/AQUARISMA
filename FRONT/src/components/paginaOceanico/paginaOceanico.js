import { Fragment } from 'react';
import Header from '../header/header';
import CuadroImagenes from '../cuadroImagenes/cuadroImagenes';

export default function PaginaOceanico(){
    return(
        <Fragment>
            <Header/>
            <CuadroImagenes url1="https://fotografias.lasexta.com/clipping/cmsimages02/2022/08/24/6A998406-7A3D-4C2B-97B1-71FEDB116B46/fondo-mar_98.jpg?crop=3999,2250,x0,y0&width=1900&height=1069&optimize=high&format=webply" infoImg1="Los ecosistemas marinos son un tipo de ecosistema acuático, caracterizados por la presencia de agua salada como su principal componente. Dentro de los ecosistemas marinos se incluyen, a su vez, diferentes ecosistemas, como los océanos, mares, marismas, arrecifes, aguas someras litorales, estuarios, lagunas costeras de agua salada, costas rocosas y las zonas costeras." url2="https://migrationlawupdates.com.au/wp-content/uploads/2018/11/Seabed.jpg" infoImg2="Esta gran variedad de ecosistemas marinos sustentan, en su conjunto, una asombrosa diversidad de vida animal y vegetal. El conjunto de todos los ecosistemas marinos ocupan el 70% de la superficie del planeta." url3="https://s1.eestatic.com/2022/12/09/enclave-ods/semanales/724687779_229350113_1706x960.jpg" infoImg3="Numerosas plantas, tanto especies sumergidas como emergentes y flotantes constituyen la rica biodiversidad vegetal de todos y cada uno de los ecosistemas marinos. Directamente relacionadas con las características físico-químicas del tipo del ecosistema marino en que habiten, dichas especies presentaran unas u otras formas de vida, contando, además, con ciertas necesidades vitales."/>
        </Fragment>
    )
}