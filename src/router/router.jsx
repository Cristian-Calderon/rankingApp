import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom" 
import { Companys } from "../components/Companys";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            {/* path direccion */}
            <Route path="/" element= {<Companys/>}/>
            {/* <Route path="*" element= {<NotFoundPage/>}/> */}
        </Routes>
        </BrowserRouter>
    );
}

export default Router;