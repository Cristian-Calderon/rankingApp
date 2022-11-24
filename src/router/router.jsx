import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom" 

import Createapp from "../components/Create/Createapp";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            {/* path direccion */}
            <Route path="/" element = {<Createapp/>}/>

            {/* <Route path="*" element= {<NotFoundPage/>}/> */}
        </Routes>
        </BrowserRouter>
    );
}

export default Router;