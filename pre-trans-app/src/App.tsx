import React, { useState } from 'react';
import StyledMessage from './components/StyledMessage';

function App() {
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };
  if (num % 3 === 0 && !showFaceFlag) {
    setShowFaceFlag(true);
  } else if (showFaceFlag) {
    setShowFaceFlag(false);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <StyledMessage color="#00babc">
        {num}
        Tokyo : Japan
      </StyledMessage>
      <button onClick={onClickCountUp} type="button">
        +1 :)
      </button>
      <button onClick={onClickSwitchFlag} type="button">
        on / off
      </button>
      {showFaceFlag && <p> ^ ^</p>}
    </>
  );
}

export default App;
