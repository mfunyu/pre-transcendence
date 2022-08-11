/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import StyledMessage from './components/StyledMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [showFaceFlag, setShowFaceFlag] = useState(true);
  const [inputText, setInputText] = useState('');

  const socket = io('http://localhost:3000');

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setShowFaceFlag(!showFaceFlag);
  };
  useEffect(() => {
    if (num % 3 === 0 && !showFaceFlag) {
      setShowFaceFlag(true);
    } else if (num % 3 !== 0 && showFaceFlag) {
      setShowFaceFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connection ID : ', socket.id);
    });
  }, []);

  const onClickSubmit = useCallback(() => {
    console.log(inputText);
    socket.emit('message', inputText);
  }, [inputText]);

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
      <input
        id="inputText"
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <input id="sendButton" onClick={onClickSubmit} type="submit" />
    </>
  );
};

export default App;
