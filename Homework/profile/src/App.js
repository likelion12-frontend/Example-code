import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import NavBar from './component/Nav';
import IntroductionBox from "./component/Introduction.jsx";
import MainIntroBox from './component/MainIntroBox.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <IntroductionBox />
      <MainIntroBox />
    </BrowserRouter>
  );
}

export default App;
