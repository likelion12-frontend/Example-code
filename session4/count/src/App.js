import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // npm install react-bootstrap bootstrap

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [notice, setNotice] = useState(false);

  const showNotice = () => {
    setNotice(true);
  }

  const increaseGoodCount = () => {
    setGoodCount(goodCount + 1);
  };

  useEffect(() => {
    alert(`좋아요: ${goodCount}`);
  }, [goodCount]);

  useEffect(() => {
    let a = setTimeout(() => {
      setNotice(false);
      console.log("폭탄 터짐 ㅅㄱ");
    }, 5000);
    return () => {
      clearTimeout(a);
    }
  }, [notice]);

  return (
    <div className="App">
      {notice && (
        <div className="alert alert-warning">
          <p>5초뒤 폭탄이 터집니다.</p>
        </div>
      )}
      <h1>useEffect 사용법</h1>
      <div className="box">
        <button onClick={increaseGoodCount}>👍</button>
      </div>
      <div className="timer">
        <button onClick={showNotice}>폭탄 실행.</button>
      </div>
    </div>
  );
}

export default App;
