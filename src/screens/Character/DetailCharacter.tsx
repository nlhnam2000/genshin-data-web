import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GenshinDB from "genshin-db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ContentWrapper from "components/Content/ContentWrapper";
import CharacterAvatar from "components/Characters/CharacterAvatar";
import {
  CharacterSkill,
  CharacterPassive,
  CharacterConstellation,
  CharacterAscension,
} from "components/Characters/CharacterComponents";
import {
  GetCharacterData,
  GetCharacterTalent,
  GetCharacterConstellation,
} from "api/character";

import axios from "axios";

import "scss/characters.scss";

const DetailCharacter: React.FC = () => {
  const [characterData, setCharacterData] = useState<
    GenshinDB.Character | undefined
  >();
  const [characterTalent, setCharacterTalent] = useState<
    GenshinDB.Talent | undefined
  >();
  const [characterConstellation, setCharacterConstellation] =
    useState<GenshinDB.Constellation>();

  const { name } = useParams();

  const getCharacter = async (name: string | undefined): Promise<void> => {
    try {
      const result = await Promise.all([
        GetCharacterData(name),
        GetCharacterTalent(name),
        GetCharacterConstellation(name),
      ]);

      setCharacterData(result[0]);
      setCharacterTalent(result[1]);
      setCharacterConstellation(result[2]);
    } catch (error) {
      console.error("Cannot get character", error);
    }
  };

  useEffect(() => {
    getCharacter(name);
  }, []);

  return (
    <ContentWrapper
      background={`${characterData?.region.toLowerCase() || "mondstadt"}`}
    >
      {characterData && (
        <ContentWrapper.Header>
          <ContentWrapper.HeaderImage>
            <CharacterAvatar onlyAvatar data={characterData} />
          </ContentWrapper.HeaderImage>
          <ContentWrapper.HeaderContent>
            <div>
              <h3 className="text-character">
                {characterData.fullname} ( {characterData.rarity}{" "}
                <FontAwesomeIcon icon={faStar} /> )
              </h3>

              <img
                src={
                  GenshinDB.elements(characterData.element, {
                    resultLanguage: GenshinDB.Language.English,
                  })?.images.wikia
                }
                alt={characterData.element + "_icon"}
                style={{ width: 30, height: 30 }}
              />
            </div>
            <h3 className="text-character" style={{ textAlign: "left" }}>
              {characterData.description}
            </h3>
          </ContentWrapper.HeaderContent>
        </ContentWrapper.Header>
      )}

      {characterTalent && (
        <>
          <CharacterSkill data={characterTalent} />
          <CharacterPassive data={characterTalent} />
          <CharacterConstellation data={characterConstellation} />
          <CharacterAscension data={characterData?.costs} />
        </>
      )}
    </ContentWrapper>
  );
};

export default DetailCharacter;
