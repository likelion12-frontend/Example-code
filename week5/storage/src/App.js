import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import { GlobalStyle } from './style/globalStyle';
import Main from './main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup/Signup';

const Wrapper = styled.div`
display:flex;
flex-direction: column;
max-width:393px;
width:100vw;
min-height:852px;
background-color:white;

`

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
