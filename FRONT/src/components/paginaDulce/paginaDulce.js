import { Fragment } from "react";
import Header from "../header/header";
import CuadroImagenes from "../cuadroImagenes/cuadroImagenes";


export default function PaginaDulce(){
    return(
        <Fragment>
            <Header/>
            <CuadroImagenes url1="https://www.treehugger.com/thmb/0-OOtrGCaZ6AqSrYcDlhyvHiMWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8-ba0b26a865bd4c54a779a8e2b7eeab35.jpg" infoImg1="Los ecosistemas de agua dulce, son cuerpos de agua con baja concentración de sales, en particular su flora y fauna van a depender del clima, el lugar y las características ambientales.El agua como ambiente característico de estos ecosistemas presenta un contenido de sales inferior a 0,05%, con ácidos orgánicos y diversos sedimentos." url2="https://www.eikojones.com/wp-content/uploads/2020/08/sunrise-in-the-pond.jpg" infoImg2="Los ecosistemas de agua dulce albergan más del 40% de la riqueza mundial en peces. Estudios han demostrado que en las décadas recientes se ha extinto el 20% de las especies de peces de agua dulce conocidas." url3="https://static.scientificamerican.com/sciam/cache/file/7B5B1FA4-C85F-4CCC-BB0A576BCCEF64BC_source.jpg" infoImg3="Se estima que en el ecosistema de agua dulce existen más de 700 especies de peces, 1.200 anfibios, moluscos, mamíferos e insectos que se desenvuelven en los biomas de aguas dulces. Son la principal fuente de agua de consumo, transporte y depósito de sedimentos. La mayoría de la flora y fauna del planeta utilizan este ecosistema de agua para alimentarse."/>

        </Fragment>
    )
}