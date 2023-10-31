import { useState } from "react";

function Player({ initialName, symbol, isActive}) {
const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
  setIsEditing((editing) => !editing)

  }

  function changeHandler(event) {
setPlayerName(event.target.value);
  }


 const nameTag = !isEditing
  ? <span className="player-name">{playerName}</span> 
  : <input required type="text" className="player-name" value={playerName} onChange={changeHandler}/>

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {nameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
