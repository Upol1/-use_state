import React, { useState } from "react";
import ClickCounter from "./ClickCounter";
import ClickButton from "./ClickButton";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <ClickCounter count={count} />
      <ClickButton onClick={handleClick} />
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
};

export default App;