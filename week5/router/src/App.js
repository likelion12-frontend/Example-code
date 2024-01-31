import './App.css';
// import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import {BrowserRouter  as Router, Route, Link} from 'react-router-dom';

function App() {

  // const [comp, setComp] = useState(Home);

  return (
    /* <header>
    <button onClick={()=>setComp(Home)}>Home</button>
    <button onClick={()=>setComp(About)}>About</button>
    <button onClick={()=>setComp(Users)}>Users</button>
    </header>
    <hr/>
    <main children={comp}/> */

    <Router>
    <header>
      <Link to=""> <button>Home</button> </Link>
      <Link to="/About"> <button>about</button> </Link>
      <Link to="/Users"> <button>User</button> </Link>
    </header>
    <hr/>
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
