import React from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "components/Button/Button";

import "scss/Login.scss";
import "scss/elements.scss";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <form className="login-form">
      <textarea
        className="login-field"
        name="hoyolab-cookie"
        id=""
        cols={50}
        rows={10}
        placeholder={"Paste your hoyolab cookie here"}
      ></textarea>

      <PrimaryButton
        title="Submit"
        onClick={(event) => {
          event.preventDefault();
          navigate("/characters");
        }}
        type={"submit"}
      />
    </form>
  );
};

export default LoginForm;
