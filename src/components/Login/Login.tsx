import React from "react";
import cover from "assets/images/Cover/Paimon.webp";

import "scss/Login.scss";
import LoginForm from "components/Form/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login">
      <img src={cover} alt="paimon" className="login-cover" />
      <LoginForm />
    </div>
  );
};

export default Login;
