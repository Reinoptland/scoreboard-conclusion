import React, { useState } from "react";

import Player from "./Player";
import AddPlayerForm from "./PlayerForm";

type TPlayer = {
  id: number;
  name: string;
  score: number;
};

const compareByScore = (playerA: TPlayer, playerB: TPlayer) => {
  return playerB.score - playerA.score;
};

const compareByName = (playerA: TPlayer, playerB: TPlayer) => {
  return playerA.name.localeCompare(playerB.name);
};

export default function Scoreboard() {
  const [sortBy, setSortBy] = useState("score");
  const [players, setPlayers] = useState<TPlayer[]>([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const playersSorted =
    // first "copy" the array
    [...players]
      // then sort it with the `compareByScore` callback function
      .sort(sortBy === "score" ? compareByScore : compareByName);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:</p>
      <ul>
        {playersSorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
            />
          );
        })}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
