
import './App.css';
import React, { Component } from 'react'

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import ContactUs from './components/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio />
        <ContactUs />
      </div>
    );
  }
}

export default App;