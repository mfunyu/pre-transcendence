import React from "react";

function App() {
  const onClickButton = () => alert("Button clicked");
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={onClickButton}>Click here :)</button>
    </>
  );
}

export default App;
