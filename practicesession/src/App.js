import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Join from './pages/Join';



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/회원가입" element={<Join></Join>}/>
      </Routes>
    </div>
  );
}

export default App;

