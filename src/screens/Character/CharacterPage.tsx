import React, { useEffect, useState } from "react";
import GenshinDB from "genshin-db";
import axios from "axios";

import ContentWrapper from "components/Content/ContentWrapper";
import CharacterGroup from "components/Characters/CharacterGroup";

import "scss/characters.scss";

const CharacterPage: React.FC = () => {
  const [data, setData] = useState<any>([]);

  const getCharactersByElement = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/characters/elements`
    );

    try {
      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCharactersByElement();
  }, []);

  return (
    <ContentWrapper background="mondstadt">
      <div className="character-group">
        {Object.keys(data).map((obj) => (
          <CharacterGroup key={obj} title={obj} characters={data[obj]} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default CharacterPage;
