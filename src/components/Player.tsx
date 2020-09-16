import React from "react";

type Props = {
  id: number;
  name: string;
  score: number;
  incrementScore: (playerId: number) => void;
};

export default function Player(props: Props) {
  const increment = () => {
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      <p>
        {props.name}, Score {props.score}
      </p>
      <button onClick={increment}>+</button>
    </li>
  );
}
