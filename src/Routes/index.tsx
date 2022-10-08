import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticateRoutes from "./AuthenticateRoutes";

export default function Routes() {
  return useRoutes([MainRoutes, AuthenticateRoutes]);
}
