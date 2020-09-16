import React from "react";

type Props = {
  id: number;
  name: string;
  score: number;
};

export default function Player(props: Props) {
  return (
    <li className="Player">
      <p>
        {props.name}, Score {props.score}
      </p>
    </li>
  );
}
