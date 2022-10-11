import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "scss/Navbar.scss";

const Navbar: React.FC = () => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <div className={`navbar ${toggleNavbar ? "responsive" : ""}`}>
      <div className="navbar-navlink">
        <h2 className="navbar-logo">Genshin Data</h2>
        <div className="navlink">
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
      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={() => setToggleNavbar(!toggleNavbar)}
      />
    </div>
  );
};

export default Navbar;
