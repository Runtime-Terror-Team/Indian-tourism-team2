import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
// import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/products' component={Products} />
      {/* <Route exact path='/' component={Home} /> */}
    </Switch>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
