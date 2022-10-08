import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "scss/Navbar.scss";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>("Character");

  return (
    <div className="navbar">
      <h2 className="navbar-logo">Genshin Data</h2>
      <div style={{ paddingRight: 20 }}>
        <NavLink
          to={"/characters"}
          className="navbar-button"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          Characters
        </NavLink>
        <NavLink
          to={"/weapons"}
          className="navbar-button"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          Weapons
        </NavLink>
        <NavLink
          to={"/weapons"}
          className="navbar-button"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          To-do
        </NavLink>
        <NavLink
          to={"/weapons"}
          className="navbar-button"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          Artifact
        </NavLink>
        <NavLink
          to={"/weapons"}
          className="navbar-button"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          Hoyolab
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
