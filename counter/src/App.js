import React, { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [nowNumber, setNowNumber] = useState(0);
    const numberChangeHandler = (event) => {
        setNowNumber((prev) => {
            return prev+1;
        })
    }
    return (
      <div>
        <p id="counter">{nowNumber}</p>
        <button onClick={numberChangeHandler}>Increment</button>
      </div>
    );
}
