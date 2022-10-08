import React from "react";
import { useNavigate } from "react-router-dom";
import GenshinDB from "genshin-db";
import Card from "components/Card/Card";
import "scss/characters.scss";

interface Props {
  data: GenshinDB.Character;
  onlyAvatar?: boolean;
}

const CharacterAvatar: React.FC<Props> = ({ data, onlyAvatar }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <img
        className="character-image"
        src={data.images.icon}
        alt={data.name}
        onClick={() => navigate(`/characters/${data.name}`)}
      />
      {!onlyAvatar && (
        <>
          <img
            className="elemental-icon"
            src={
              GenshinDB.elements(data.element, {
                resultLanguage: GenshinDB.Language.English,
              })?.images.wikia
            }
            alt={data.element + "_icon"}
          />
          <h5 className="text-character">{data.fullname}</h5>
        </>
      )}
    </Card>
  );
};

export default CharacterAvatar;
