// screens
import MainLayout from "components/Layout/MainLayout";
import CharacterPage from "screens/Character/CharacterPage";
import WeaponPages from "screens/Weapon/WeaponPage";
import DetailCharacter from "screens/Character/DetailCharacter";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "characters",
      element: <CharacterPage />,
    },
    {
      path: "characters/:name",
      element: <DetailCharacter />,
    },
    {
      path: "weapons",
      element: <WeaponPages />,
    },
  ],
};

export default MainRoutes;
