import React, { useEffect } from 'react';
import AOS from 'aos'
import './App.css';
import About from './Components/About/About';
//import Header from './Components/Header/Header';
import 'aos/dist/aos.css'
import Navbar from './Components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Port from './Components/Port/Port';
import Contact from './Components/Contact/Contact';

import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import HomePage from './Components/HomePage/HomePage';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    })
  })
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route path="/about">  <About /> </Route>

          <Route path="/projects"> <Port /></Route>
          <Route path="/blog"> <Blogs /> </Route>
          <Route path="/contact"> <Contact /></Route>

        </Switch>

      </Router>

      <Footer />



    </div>
  );
}

export default App;
