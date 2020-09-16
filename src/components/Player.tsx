import React from "react";

type Props = {
  name: string;
};

export default function Player(props: Props) {
  return (
    <li className="Player">
      <p>{props.name}</p>
    </li>
  );
}
