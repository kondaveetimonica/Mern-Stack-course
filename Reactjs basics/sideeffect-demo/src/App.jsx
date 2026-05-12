import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Side effect code will be here
    console.log("this runs after render ");
  }, []);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default App;
