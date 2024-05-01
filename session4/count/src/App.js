import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // npm install react-bootstrap bootstrap
import Page from "./component/page";
import { Route, Routes, useNavigate } from "react-router-dom";

function Main() {
  const [goodCount, setGoodCount] = useState(0);
  const [notice, setNotice] = useState(false);
  const navigate = useNavigate();

  const showNotice = () => {
    setNotice(true);
  };

  const increaseGoodCount = () => {
    setGoodCount(goodCount + 1);
  };

  useEffect(() => {
    alert(`좋아요: ${goodCount}`);
  }, [goodCount]);

  useEffect(() => {
    let timer = 
    setTimeout(() => {
      setNotice(false);
      console.log("폭탄 터짐 ㅅㄱ");
    }, 5000);
    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <div className="App">
      {notice && (
        <div className="alert alert-warning">
          <p>5초 후 폭탄이 터집니다.</p>
        </div>
      )}
      <h1>useEffect 사용법</h1>
      <div className="box">
        <button onClick={increaseGoodCount}>👍</button>
      </div>
      <div className="timer">
        <button onClick={showNotice}>폭탄 실행.</button>
      </div>
      <button onClick={() => navigate("/Page")}>이동</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Page" element={<Page />} />
    </Routes>
  );
}

export default App;
