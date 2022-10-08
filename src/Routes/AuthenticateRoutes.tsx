import Login from "components/Login/Login";
import { Outlet } from "react-router-dom";

const AuthenticateRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
  ],
};

export default AuthenticateRoutes;
