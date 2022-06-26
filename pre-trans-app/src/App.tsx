import React, { useState } from "react";
import StyledMessage from "./components/StyledMessage";

function App() {
  const onClickButton = () => alert("Button clicked");
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Hello World!</h1>
      <StyledMessage color="#00babc">{num}Tokyo : Japan</StyledMessage>
      <button onClick={onClickButton}>Click here :)</button>
    </>
  );
}

export default App;
