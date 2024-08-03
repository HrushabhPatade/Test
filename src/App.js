import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () =>{
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>Welcome to Counter!</h1>
      <Counter counter = {counter} />
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Sub</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
