import "./App.css";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import Page from "./component/Page.jsx";

function Main() {
  const [goodCount, setGoodCount] = useState(0);
  const [notice, setNotice] = useState(false);
  const navigate = useNavigate();

  const showNotice = () => {
    setNotice(true);
  };

  const increaseCount = () => {
    setGoodCount(goodCount + 1);
  };

  useEffect(() => {
    alert(`좋아요 ${goodCount}`);
  }, [goodCount]);

  useEffect(() => {
    let timer = 
    setTimeout(() => {
      setNotice(false);
      console.log("폭탄 터짐 수고");
    }, 5000);

    return () => clearTimeout(timer);
  })

  return (
    <div className="App">
      {notice && (
        <div className="alert alert-warning">
          <p>5초 후에 폭탄이 터집니다.</p>
        </div>
      )}
      <h1>useEffect 사용법</h1>
      <div className="box">
        <button onClick={increaseCount}>👍</button>
      </div>
      <div className="timer">
        <button onClick={showNotice}>폭탄 실행</button>
      </div>
      <button onClick={() => navigate("/Page")}>move</button>
    </div>
  )
  
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="Page" element={<Page />}></Route>
    </Routes>
  )
}

export default App;

