import { useState } from "react";

function App() {
  let [count, setCount] = useState(1);
  const add = () => {
    if (count < 20) setCount(count + 1);
  };
  const subtract = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>{count} + 1</button>
      <button onClick={subtract}>{count} - 1</button>
    </>
  );
}

export default App;
