import React from "react";

import "scss/LandingPage.scss";

import Login from "../Login/Login";

const LandingPage: React.FC = () => {
  return (
    <main className="signin-section">
      <div className="signin-section-text">
        <h1>Welcome to Genshin Data</h1>
        <p>
          This website helps you to sync your in-game data to retrieve
          information quickly instead of accessing direcly in the game
        </p>
      </div>

      <Login />
    </main>
  );
};

export default LandingPage;
