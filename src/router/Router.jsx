import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import NavBar from "../components/nav/Nav"; 
import Createapp from '../components/Create/Createapp';
import { Companys } from "../components/companys/Companys";

const Router = () =>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Createapp/>}/>
            
            <Route path="/companys" element= {<Companys/>} /> 
        </Routes>
        
        </BrowserRouter>
    );
}


export default Router;