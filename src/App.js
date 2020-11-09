import logo from './logo.svg';
import './App.css';
import Poke from './Components/Poke';
import React, { useEffect, useState } from 'react';
import Button from './Components/Button'
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <Button />
      <Router>
      <Poke path="/poke"/>
      </Router>
    </div>
  );
}

export default App;
