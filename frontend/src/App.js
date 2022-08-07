import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react'
import Navigation from './components/Navigation'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Navigation/>
    <Routes>
     </Routes>
   </Router>
  );
}

export default App;
