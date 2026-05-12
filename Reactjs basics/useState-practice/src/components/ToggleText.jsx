import React, { useState } from "react";

export default function ToggleText() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>this is visible now</p>}
    </div>
  );
}
