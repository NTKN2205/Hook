import React, { useState } from "react";

function TextDisplay() {
  const [displayText, setDisplayText] = useState("Hello, World!");

  const handleClick = () => {
    if (displayText === "Hello, World!") {
      setDisplayText("Goodbye, World!");
    } else {
      setDisplayText("Hello, World!");
    }
  };

  return (
    <div>
      <h1>{displayText}</h1>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default TextDisplay;
