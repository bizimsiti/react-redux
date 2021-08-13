import React from "react";

function Card({ character }) {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-body-img">
          <img src={character.img} alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className="card-header-name">{character.name}</div>
        <div className="card-header-nickname">
          <span>NICKNAME</span>
          {character.nickname}
        </div>
        <div className="card-header-portrayed">
          <span>PORTRAYED</span>
          {character.portrayed}
        </div>
      </div>
    </div>
  );
}

export default Card;
