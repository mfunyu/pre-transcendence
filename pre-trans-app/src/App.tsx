import React, { useState } from "react";
import StyledMessage from "./components/StyledMessage";

function App() {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  if (num % 3 === 0) {
    setShowFaceFlag(true);
  } else {
    setShowFaceFlag(false);
  }
  return (
    <>
      <h1>Hello World!</h1>
      <StyledMessage color="#00babc">{num}Tokyo : Japan</StyledMessage>
      <button onClick={onClickCountUp}>+1 :)</button>
      <button onClick={onClickSwitchFlag}>on / off</button>
      {showFaceFlag && <p> ^ ^</p>}
    </>
  );
}

export default App;
