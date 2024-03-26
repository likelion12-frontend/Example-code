import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import NavBar from './component/Nav';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
