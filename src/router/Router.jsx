import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import NavBar from "../components/nav/Nav"; 
//import Createapp from '../components/Create/Createapp';
import { Companys } from "../components/companys/Companys";
import Home from "../components/vistas/home/Home"
import Top from "../components/vistas/topapps/Top"
import Top2 from "../components/vistas/topapps/Top2"
import Medium from "../components/vistas/mediumapps/Medium"
import Medium2 from "../components/vistas/mediumapps/Medium2"
import Worst from "../components/vistas/worstapps/Worst"
import Worst2 from "../components/vistas/worstapps/Worst2"
import About from "../components/vistas/about/About"
import Ejemplo from "../components/Create/editData"
import { Rank } from "../components/Rank/Rank";


const Router = () =>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Home/>}/>
            <Route path="/Top" element= {<Top/>}/>
            <Route path="/Top2" element= {<Top2/>}/>
            <Route path="/Medium" element= {<Medium/>}/>
            <Route path="/Medium2" element= {<Medium2/>}/>
            <Route path="/Worst" element= {<Worst/>}/>
            <Route path="/Worst2" element= {<Worst2/>}/>
            <Route path="/About" element= {<About/>}/>
            <Route path="/Createapp" element= {<Ejemplo/>}/>
            <Route path="/companys" element= {<Companys/>} />
            <Route path="/Rank" element= {<Rank/>} />
            
           
        </Routes>
        
        </BrowserRouter>
    );
}


export default Router;