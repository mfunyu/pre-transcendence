import React from "react";

function App() {
  const onClickButton = () => alert("Button clicked");
  return (
    <>
      <h1>Hello World!</h1>
      <p style={{ color: "#00babc", fontSize: "20px" }}>42Tokyo : Japan</p>
      <button onClick={onClickButton}>Click here :)</button>
    </>
  );
}

export default App;
