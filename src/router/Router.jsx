import { BrowserRouter, Route, Routes} from "react-router-dom" 
import NavBar from "../components/nav/Nav"; 
import Home from "../components/home/Home";
import { Companys } from "../components/companys/Companys";
import { Rank } from "../components/Rank/Rank";
import Top from "../components/vistas/topapps/Top";
import Medium from "../components/vistas/mediumapps/Medium";
import Worst from "../components/vistas/worstapps/Worst";
import Ejemplo from "../components/Create/editData";
import About from "../components/about/About";



const Router = () =>{
  
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Home/>}/>
            <Route path="/companys/:id" element= {<Companys/>} />
            <Route path="/Rank" element= {<Rank/>} />
            <Route path="/Top" element= {<Top/>}/>
            <Route path="/Medium" element= {<Medium/>}/>
            <Route path="/Worst" element= {<Worst/>}/>
            <Route path="/Ejemplo" element= {<Ejemplo/>}/>      
            <Route path="/Createapp" element= {<Ejemplo/>}/>
            <Route path="/About" element= {<About/>}/>
            
            
            
            
           
        </Routes>
        
        </BrowserRouter>
    );
}


export default Router;