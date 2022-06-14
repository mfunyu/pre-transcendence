import React from "react";
import StyledMessage from "./components/StyledMessage";

function App() {
  const onClickButton = () => alert("Button clicked");
  return (
    <>
      <h1>Hello World!</h1>
      <StyledMessage color="#00babc" message="42Tokyo : Japan" />
      <button onClick={onClickButton}>Click here :)</button>
    </>
  );
}

export default App;
