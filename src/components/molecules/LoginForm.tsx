import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setFailedState, userLogIn } from "../../features/loginSlice";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function LoginForm() {
  //
  const userData = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch();

  const [credentialsInput, setCredentialsInput] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredentialsInput({
      ...credentialsInput,
      email: e.currentTarget.value,
    });
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredentialsInput({
      ...credentialsInput,
      password: e.currentTarget.value,
    });
  };

  const handleCheckCredentials = () => {
    if (
      userData.email === credentialsInput.email &&
      userData.password === credentialsInput.password
    ) {
      dispatch(userLogIn());
      dispatch(setFailedState({ failed: false }));
    } else {
      dispatch(setFailedState({ failed: true }));
    }
    setCredentialsInput({ email: "", password: "" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleCheckCredentials();
  };

  return (
    <div className="flex flex-col space-y-2">
      <Input
        wide={false}
        placeholder="E-mail"
        value={credentialsInput.email}
        onChange={handleEmailChange}
        onKeyDown={handleKeyDown}
        failedState={userData.failedState}
      />
      <Input
        wide={false}
        placeholder="Password"
        value={credentialsInput.password}
        onChange={handlePasswordChange}
        onKeyDown={handleKeyDown}
        inputType="password"
        failedState={userData.failedState}
      />
      <Button buttonStyle="primary" onClick={handleCheckCredentials}>
        Login
      </Button>
      {userData.failedState && (
        <p className="text-sm p-6" data-testid="failed-login-message">
          Wrong e-mail or password!
        </p>
      )}
    </div>
  );
}

export default LoginForm;
