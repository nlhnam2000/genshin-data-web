import React, { useState } from "react";
import GenshinDB from "genshin-db";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

import "scss/characters.scss";
import Box from "components/Box/Box";
import Ascend, { TotalAscend } from "components/Ascension/Ascend";
import { TalentDecoding } from "utils/utils";
import { Cost } from "interfaces/costs";

interface Props {
  data: GenshinDB.Talent;
}

interface ConstellationProps {
  data: GenshinDB.Constellation | undefined;
}

interface TalentDetailProps {
  data: GenshinDB.CombatTalentDetail;
}

interface AscensionProps {
  data: CharacterCost | undefined;
}

type CharacterCost = {
  ascend1: GenshinDB.Items[];
  ascend2: GenshinDB.Items[];
  ascend3: GenshinDB.Items[];
  ascend4: GenshinDB.Items[];
  ascend5: GenshinDB.Items[];
  ascend6: GenshinDB.Items[];
};

export const CharacterSkill: React.FC<Props> = ({ data }) => {
  const [toggleSkill, setToggleSkill] = useState({
    skill1: false,
    skill2: false,
    skill3: false,
  });

  return (
    <div className="character-skill">
      <h3 className="title">Talents</h3>
      {/* combat 1 */}
      <div className="character-skill-list">
        <Box>
          <div
            className={`box-wrapper-section ${
              toggleSkill.skill1 ? "toggle" : ""
            }`}
          >
            <h3 className="text-character-title">{data.combat1.name}</h3>
            <p>{data.combat1.description}</p>
            <FontAwesomeIcon
              icon={toggleSkill.skill1 ? faChevronUp : faChevronDown}
              className="toggle-icon"
              onClick={() =>
                setToggleSkill((prev) => ({ ...prev, skill1: !prev.skill1 }))
              }
            />
          </div>
          {toggleSkill.skill1 && <CharacterSkillDetail data={data.combat1} />}
        </Box>
        {/* combat 2 */}
        <Box>
          <div
            className={`box-wrapper-section ${
              toggleSkill.skill2 ? "toggle" : ""
            }`}
          >
            <h3 className="text-character-title">{data.combat2.name}</h3>
            <p>{data.combat2.description}</p>
            <FontAwesomeIcon
              icon={toggleSkill.skill2 ? faChevronUp : faChevronDown}
              className="toggle-icon"
              onClick={() =>
                setToggleSkill((prev) => ({ ...prev, skill2: !prev.skill2 }))
              }
            />
          </div>
          {toggleSkill.skill2 && <CharacterSkillDetail data={data.combat2} />}
        </Box>
        {/* combat 3 */}
        <Box>
          <div
            className={`box-wrapper-section ${
              toggleSkill.skill3 ? "toggle" : ""
            }`}
          >
            <h3 className="text-character-title">{data.combat3.name}</h3>
            <p>{data.combat3.description}</p>
            <FontAwesomeIcon
              icon={toggleSkill.skill3 ? faChevronUp : faChevronDown}
              className="toggle-icon"
              onClick={() =>
                setToggleSkill((prev) => ({ ...prev, skill3: !prev.skill3 }))
              }
            />
          </div>
          {toggleSkill.skill3 && <CharacterSkillDetail data={data.combat3} />}
        </Box>
      </div>
    </div>
  );
};

export const CharacterPassive: React.FC<Props> = ({ data }) => {
  return (
    <div className="character-skill">
      <h3 className="title">Passive Talents</h3>
      {/* passive 1 */}
      <div className="character-skill-list">
        <Box>
          <h3 className="text-character-title">{data.passive1.name}</h3>
          <ReactMarkdown>{data.passive1.info}</ReactMarkdown>
        </Box>
        {/* passive 2 */}
        <Box>
          <h3 className="text-character-title">{data.passive2.name}</h3>
          <ReactMarkdown>{data.passive2.info}</ReactMarkdown>
        </Box>
        {/* passive 3 */}
        {data.passive3 && (
          <Box>
            <h3 className="text-character-title">{data.passive3.name}</h3>
            <ReactMarkdown>{data.passive3.info}</ReactMarkdown>
          </Box>
        )}
      </div>
    </div>
  );
};

export const CharacterConstellation: React.FC<ConstellationProps> = ({
  data,
}) => {
  return (
    <>
      {data && (
        <div className="character-constellation">
          <h3 className="title">Constellations</h3>
          {/* passive 1 */}
          <div className="character-constellation-list">
            <Box>
              <h3 className="text-character-title">{data.c1.name}</h3>
              <img src={data.images.c1} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c1.effect}</ReactMarkdown>
            </Box>
            {/* passive 2 */}
            <Box>
              <h3 className="text-character-title">{data.c2.name}</h3>
              <img src={data.images.c2} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c2.effect}</ReactMarkdown>
            </Box>
            {/* passive 3 */}
            <Box>
              <h3 className="text-character-title">{data.c3.name}</h3>
              <img src={data.images.c3} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c3.effect}</ReactMarkdown>
            </Box>
            <Box>
              <h3 className="text-character-title">{data.c4.name}</h3>
              <img src={data.images.c4} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c4.effect}</ReactMarkdown>
            </Box>
            <Box>
              <h3 className="text-character-title">{data.c5.name}</h3>
              <img src={data.images.c5} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c5.effect}</ReactMarkdown>
            </Box>
            <Box>
              <h3 className="text-character-title">{data.c6.name}</h3>
              <img src={data.images.c6} alt="" className="constellation-icon" />
              <ReactMarkdown>{data.c6.effect}</ReactMarkdown>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export const CharacterSkillDetail: React.FC<TalentDetailProps> = ({ data }) => {
  const [level, setLevel] = useState<number>(1);
  const attributes = TalentDecoding(data, level);

  const increaseLevel = () => {
    if (level <= 9) {
      setLevel((prev) => prev + 1);
    }
  };

  const decreaseLevel = () => {
    if (level >= 2) {
      setLevel((prev) => prev - 1);
    }
  };

  return (
    <div className="character-skill-detail">
      <ReactMarkdown>{data.info}</ReactMarkdown>
      <div className="character-skill-detail-level">
        <FontAwesomeIcon
          icon={faMinusCircle}
          className="level-icon"
          onClick={() => decreaseLevel()}
        />
        <p>Level {level}</p>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="level-icon"
          onClick={() => increaseLevel()}
        />
      </div>
      <ul className="character-skill-detail-attribute">
        {attributes.map((attribute) => (
          <li className="character-skill-detail-attribute-label">
            <p className="left">{attribute.label}</p>
            <p className="right">{attribute.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CharacterAscension: React.FC<AscensionProps> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="character-skill">
          <h3 className="title">Material Ascension</h3>
          <Ascend label="1st Ascension" data={data?.ascend1} />
          <Ascend label="2nd Ascension" data={data?.ascend2} />
          <Ascend label="3rd Ascension" data={data?.ascend3} />
          <Ascend label="4th Ascension" data={data?.ascend4} />
          <Ascend label="5th Ascension" data={data?.ascend5} />
          <Ascend label="6th Ascension" data={data?.ascend6} />
          <TotalAscend data={data} />
        </div>
      )}
    </>
  );
};
