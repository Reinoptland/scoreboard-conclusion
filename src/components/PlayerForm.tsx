import React, { useState } from "react";

export default function PlayerForm() {
  const initialState = localStorage.getItem("name") || "";
  const [name, setName] = useState(initialState);

  console.log("FORM RENDERED");

  const feedback = name.length < 3 ? "This is too short" : null;

  return (
    <div className="PlayerForm">
      <label>Name:</label>
      <input
        value={name}
        onChange={(e) => {
          localStorage.setItem("name", e.target.value);
          setName(e.target.value);
        }}
      />
      <span>{feedback}</span>
      <button>Add player</button>
    </div>
  );
}
