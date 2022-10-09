import React from "react";
import GenshinDB from "genshin-db";

import "scss/characters.scss";

interface Props {
  data: GenshinDB.Items[];
  label: string;
}

interface ItemProps {
  name: string;
  count: number;
}

const getRarityBackground = (
  rarity: "1" | "2" | "3" | "4" | "5" | undefined
): string => {
  switch (rarity) {
    case "5":
      return "gold-card";
    case "4":
      return "purple-card";
    case "3":
      return "green-card";
    case "2":
      return "blue-card";
    case "1":
      return "gray-card";
    default:
      return "gray-card";
  }
};

const Ascend: React.FC<Props> = ({ data, label }) => {
  return (
    <div className="ascension-items">
      <p className="ascension-items-label">{label}</p>
      <ul className="ascension-items-list">
        {data.map((item) => (
          <li className="ascension-items-list-detail">
            <ItemAvatar name={item.name} count={item.count} />
            <p className="ascension-items-list-detail-name">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemAvatar: React.FC<ItemProps> = ({ name, count }) => (
  <div className="item-avatar">
    <img
      src={GenshinDB.materials(name)?.images.fandom}
      alt=""
      className={`item-image ${getRarityBackground(
        GenshinDB.materials(name)?.rarity
      )}`}
    />
    <p className="item-count">{count}</p>
  </div>
);

export default Ascend;
