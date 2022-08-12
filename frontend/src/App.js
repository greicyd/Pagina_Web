import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Navigation from './components/Navigation'
import Top10Visitadas from './components/Top10Visitadas'


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navigation/>
    <Routes>
    <Route path="/top10Visitadas" element={<Top10Visitadas/>} />
     </Routes>
   </Router>
  );
}
export const backend = {
  host: "http://localhost",
  port: 8080
}
export default App;
