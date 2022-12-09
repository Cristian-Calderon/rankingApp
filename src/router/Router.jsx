import { BrowserRouter, Route, Routes} from "react-router-dom" 
import NavBar from "../components/nav/Nav"; 
import Home from "../components/home/Home";
import { Companys } from "../components/companys/Companys";
<<<<<<< HEAD
=======
import Home from "../components/vistas/home/Home";
import Top from "../components/vistas/topapps/Top";
import Top2 from "../components/vistas/topapps/Top2";
import Medium from "../components/vistas/mediumapps/Medium";
import Medium2 from "../components/vistas/mediumapps/Medium2";
import Worst from "../components/vistas/worstapps/Worst";
import Worst2 from "../components/vistas/worstapps/Worst2";
import About from "../components/vistas/about/About";
import Ejemplo from "../components/Create/editData";
import Createapp from "../components/Create/editData";
import Stars from "../components/ratingStars/Stars";
import CommentBox from "../components/ratingStars/CommentBox";
import Comparation from "../components/vistas/comparationPage/Comparation"
>>>>>>> 4cce555bd8a7862adf5d0ac24ec41c7e0f37c1fc
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
<<<<<<< HEAD
=======
            <Route path="/Top" element= {<Top/>}/>
            <Route path="/Top2" element= {<Top2/>}/>
            <Route path="/Medium" element= {<Medium/>}/>
            <Route path="/Medium2" element= {<Medium2/>}/>
            <Route path="/Worst" element= {<Worst/>}/>
            <Route path="/Worst2" element= {<Worst2/>}/>
            <Route path="/About" element= {<About/>}/>
            <Route path="/Ejemplo" element= {<Ejemplo/>}/>
            <Route path="/Createapp" element= {<Createapp/>}/>
            <Route path="/Stars" element= {<Stars/>}/>
            <Route path="/CommentBox" element= {<CommentBox/>}/>
            <Route path="/Comparation" element= {<Comparation/>}/>
            <Route path="/Createapp" element= {<Ejemplo/>}/>
>>>>>>> 4cce555bd8a7862adf5d0ac24ec41c7e0f37c1fc
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