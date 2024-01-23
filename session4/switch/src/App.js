import "./App.css";
import { useState, useEffect } from "react";
import Page from "./components/Page.jsx";
import { DisplayContext } from "./context/DisplayContext.jsx";
import { UserContext } from "./context/UserContext.jsx";

// function App() {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <div className="App">
//       <Page isDark={isDark} setIsDark={setIsDark}/>
//     </div>
//   );
// }

function App() {
  const [isDark, setIsDark] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const userInput = prompt("사용자명 입력: ", "");
    setUserName(userInput);
  },[])

  return (
    <div className="App">
      <UserContext.Provider value={userName}>
        <DisplayContext.Provider value={{ isDark, setIsDark }}>
          <Page />
        </DisplayContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
