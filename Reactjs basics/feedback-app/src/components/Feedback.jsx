import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmittedFeedback] = useState(false);
  //Handle Change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("please fill both fields");
    }
    setIsSubmittedFeedback(true);
  };
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Feedback project</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          <label>Message:</label>
          <textarea
            type="text"
            value={message}
            onChange={handleMessageChange}
            rows="4"
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      {/* Show submitted if available */}
      {isSubmitted && (
        <div
          style={{
            marginTop: "30px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "6px",
          }}
        >
          <h3>Feedback received:</h3>
          <p>Name:{name}</p>
          <p>Message:{message}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
