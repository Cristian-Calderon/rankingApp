import './App.css';
import NavBar from '../src/components/nav/Nav.jsx';
import Mod from '../src/components/midificador_json/Mod'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <NavBar/>
      <Mod/>
    </div>
  );
}

export default App;
