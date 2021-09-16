import React from "react";
import Heading from "../atoms/Heading";
import LoginForm from "../molecules/LoginForm";

function LoginContainer() {
  return (
    <div className=" max-w-sm mx-auto space-y-8 m-32 text-center">
      <Heading>🍕 Let's Eat!</Heading>
      <LoginForm />
    </div>
  );
}

export default LoginContainer;
