import React, { useContext } from "react";
import FormContext from "./FormContext";

function SimpleForm() {
  const { theme, toggleTheme } = useContext(FormContext);

  const formStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#333333" : "#ffffff",
  };

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#eeeeee" : "#666666",
    color: theme === "light" ? "#333333" : "#ffffff",
  };

  return (
    <div style={formStyle}>
      <h2>Simple Form</h2>
      <form>{/* Form fields go here */}</form>
      <button onClick={toggleTheme} style={buttonStyle}>
        Toggle Theme
      </button>
    </div>
  );
}

export default SimpleForm;
