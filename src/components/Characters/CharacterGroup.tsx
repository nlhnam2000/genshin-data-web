import React, { useState, useEffect } from "react";
import CharacterAvatar from "./CharacterAvatar";
import GenshinDB from "genshin-db";

import "scss/characters.scss";

interface Props {
  characters: GenshinDB.Character[];
  title: string;
}

const CharacterGroup: React.FC<Props> = ({ characters, title }) => {
  return (
    <div className="character-group-content">
      <div className="character-group-content-title">
        <h3>{title}</h3>
        <img
          src={
            GenshinDB.elements(title, {
              resultLanguage: GenshinDB.Language.English,
            })?.images.wikia
          }
          alt=""
        />
      </div>
      <div className="character-group-content-avatar">
        {characters.map((character) => (
          <CharacterAvatar key={character.name} data={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterGroup;
