import axios from "axios";
import GenshinDB from "genshin-db";

export const GetCharacterData = async (
  name: string | undefined
): Promise<GenshinDB.Character> => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_API}/characters/${name}`
  );

  return res.data;
};

export const GetCharacterTalent = async (
  name: string | undefined
): Promise<GenshinDB.Talent> => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_API}/characters/${name}/talents`
  );

  return res.data;
};

export const GetCharacterConstellation = async (
  name: string | undefined
): Promise<GenshinDB.Constellation> => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_API}/characters/${name}/constellation`
  );

  return res.data;
};
