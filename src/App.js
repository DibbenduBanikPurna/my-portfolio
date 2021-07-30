import React from 'react';

import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Work from './Components/Work/Work';
import Port from './Components/Port/Port';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
     
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/"> <Header/> </Route>
        <Route path="/about">  <About/> </Route>
        <Route  path="/services">   <Services/> </Route>
        <Route  path="/work">  <Work/> </Route>
        <Route path="/portfolio"> <Port/></Route>
        <Route path="/contact"> <Contact/></Route>
      </Switch>
    </Router>
    
   
     
    
   
    </div>
  );
}

export default App;
