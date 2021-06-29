import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';
import Home from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router className="App">
        <Switch>
          {/* Home route */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          {/* Portfolio Route */}
          <Route exact path="/portfolio" component={PortfolioPage}/>
          {/* About Route */}
          <Route exact path="/about" component={AboutPage}/>
          {/* Contact Route */}
          <Route exact path="/contact" component={ContactPage}/>
        </Switch>
    </Router>
  );
}

export default App;
