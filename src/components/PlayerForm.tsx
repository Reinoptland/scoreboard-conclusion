import React, { useState } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

export default function PlayerForm(props: Props) {
  const initialState = localStorage.getItem("name") || "";
  const [name, setName] = useState(initialState);

  console.log("FORM RENDERED");

  const feedback = name.length < 3 ? "This is too short" : null;

  const handleClick = () => {
    props.addPlayer(name);
    localStorage.removeItem("name");
    setName("");
  };

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
      <button onClick={handleClick}>Add player</button>
    </div>
  );
}
