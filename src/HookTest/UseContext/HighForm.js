import React, { useState } from "react";
import FormContext from "./FormContext";

function FormProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const formContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
