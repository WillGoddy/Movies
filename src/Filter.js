import React from "react";

function Filter({ setSearchTitle, setSearchNote }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un film"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note minimale"
        onChange={(e) => setSearchNote(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
