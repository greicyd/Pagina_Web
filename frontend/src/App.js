import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Navigation from './components/Navigation'
import Bienvenida from './components/Bienvenida'
import Top10Visitadas from './components/Top10Visitadas'
import Top20Ventas from './components/Top20Ventas'
import Top5Area from './components/Top5Area'



import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navigation/>
    <div id='content'>
    <Routes>
    <Route path="/"  element={<Bienvenida/>} />
    <Route path="/top10Visitadas" element={<Top10Visitadas/>} />
    <Route path="/top20Ventas" element={<Top20Ventas/>} />
    <Route path="/top5Area" element={<Top5Area/>} />

     </Routes>
     </div>
   </Router>
  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}
export default App;
