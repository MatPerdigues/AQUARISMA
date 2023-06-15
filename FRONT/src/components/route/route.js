import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home/home';
import PaginaAmazonico from '../paginaAmazonico/paginaAmazonico';
import PaginaOceanico from '../paginaOceanico/paginaOceanico';
import PaginaDulce from '../paginaDulce/paginaDulce';
import PaginaPeces from '../paginaPeces/paginaPeces';
import PaginaAdmin from '../paginAdmin/paginaAdmin';

export default function Ruteo (){

    return(

        <BrowserRouter>
            <Routes>ecosistemaAmazonico
                <Route path= '/' element = {<Home/>}></Route>
                <Route path='/ecosistemaAmazonico' element={<PaginaAmazonico/>}></Route>
                <Route path="/ecosistemaOceanico" element={<PaginaOceanico/>}></Route>
                <Route path="/ecosistemaDulce" element={<PaginaDulce/>}></Route>
                <Route path="/peces" element={<PaginaPeces/>}></Route>
                <Route path="/admin" element={<PaginaAdmin/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}
