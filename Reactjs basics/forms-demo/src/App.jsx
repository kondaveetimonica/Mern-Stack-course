import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    //stop thr page from refreshing
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <h1>Form Demo</h1>
      <h2>you typed {name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;
