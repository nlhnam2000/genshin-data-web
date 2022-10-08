import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import "scss/general.scss";

const MainLayout: React.FC = () => {
  return (
    <div className="mainlayout">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
