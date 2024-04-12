import './App.css';
import {useState} from "react";
import Page from './component/Page';
import { DisplayContext } from './context/DisplayContext';
import { UserContext } from './context/UserContext';

function App() {
  // const [isDark, setIsDark] = useState(false);


  // return (
  // <div className="App">
  //   <Page isDark={isDark} setIsDark={setIsDark} />
  // </div>  
  // );

  const [isDark, setIsDark] = useState(false);
  const [userName, setUserName] = useState("Jun");
  
  return (
    <div className='App'>
      <UserContext.Provider value={userName}>
        <DisplayContext.Provider value={{isDark, setIsDark}}>
          <Page />
        </DisplayContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App;
