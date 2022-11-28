import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/vistas/home/Home";
import Top from "./components/vistas/topapps/Top";
import Top2 from "./components/vistas/topapps/Top2";
import Medium from "./components/vistas/mediumapps/Medium";
import Medium2 from "./components/vistas/mediumapps/Medium2";
import Worst from "./components/vistas/worstapps/Worst";
import Worst2 from "./components/vistas/worstapps/Worst2";
import About from "./components/vistas/about/About";
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Top" element={<Top />} />
          <Route exact path="/Top2" element={<Top2 />} />
          <Route exact path="/Medium" element={<Medium />} />
          <Route exact path="/Medium2" element={<Medium2 />} />
          <Route exact path="/Worst" element={<Worst />} />
          <Route exact path="/Worst2" element={<Worst2 />} />
          <Route exact path="/About" element={<About />} />
          </Routes>
      </Router>
     </div>
  );
}

export default App;
