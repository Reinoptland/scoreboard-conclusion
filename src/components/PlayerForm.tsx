import React, { useState, useEffect } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

export default function PlayerForm(props: Props) {
  const [name, setName] = useState("");

  console.log("FORM RENDERED");

  const feedback = name.length < 3 ? "This is too short" : null;

  const handleClick = () => {
    props.addPlayer(name);
    setName("");
  };

  useEffect(() => {
    const localStorageCachedName = localStorage.getItem("name");

    if (!localStorageCachedName) {
      return;
    }

    setName(localStorageCachedName);
  }, []);

  useEffect(() => {
    if (name === "") {
      return localStorage.removeItem("name");
    }

    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div className="PlayerForm">
      <label>Name:</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <span>{feedback}</span>
      <button onClick={handleClick}>Add player</button>
    </div>
  );
}
