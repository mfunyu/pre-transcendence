import React, { useState } from "react";
import StyledMessage from "./components/StyledMessage";

function App() {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Hello World!</h1>
      <StyledMessage color="#00babc">{num}Tokyo : Japan</StyledMessage>
      <button onClick={onClickCountUp}>+1 :)</button>
    </>
  );
}

export default App;
