import React, { useState } from "react";

const MultipleInputs = () => {
  //state for each type
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    acceptedTerms: false,
    favoriteFruit: "",
    comment: "",
  });
  //!separate handlers
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((previousData) => {
      console.log(previousData);
      return {
        ...previousData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>React form with multiple input types</h2>
      <div>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Age
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Gender
          <input
            name="gender"
            value="male"
            onChange={handleChange}
            type="radio"
            checked={formData.gender === "male"}
          />
          Male
          <input
            name="gender"
            value="female"
            onChange={handleChange}
            type="radio"
            checked={formData.gender === "female"}
          />
          Female
        </label>
      </div>
      <br />
      <div>
        <input
          name="acceptedTerms"
          value={formData.acceptedTerms}
          onChange={handleChange}
          type="checkbox"
          required
        />
        I accept the terms and conditions
      </div>
      <br />
      <div>
        <label>
          Favorite Fruit
          <select
            name="favoriteFruit"
            value={formData.favoriteFruit}
            onChange={handleChange}
          >
            <option value=" ">Choose</option>
            <option value="APPLE">Apple</option>
            <option value="Mango">Mango</option>
            <option value="orange">orange</option>
          </select>
        </label>
      </div>
      <br />
      <div>
        <label>
          Comment
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </label>
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MultipleInputs;
