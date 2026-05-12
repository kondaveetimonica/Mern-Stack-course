import React, { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  //step 2 handle toggle fn
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  //step 3 define styles
  const lightStyle = {
    background: "#f9f9f9",
    color: "#333",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };
  const darkStyle = {
    background: "#1a1a1a",
    color: "#f9f9f9",
    textAlign: "center",
    padding: "50px",
    minHeight: "100vh",
  };
  return (
    <div style={isDark ? darkStyle : lightStyle}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <p>This is basic theme switcher using useState</p>
      <button onClick={() => toggleTheme()}>
        Switch to {isDark ? "Light" : "Dark"} mode
      </button>
    </div>
  );
};
export default App;
