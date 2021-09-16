import React from "react";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../features/loginSlice";

function Header() {
  //
  const dispatch = useDispatch();

  return (
    <div className="border-b flex justify-between p-8">
      <Heading>🍕 Let's Eat!</Heading>
      <Button buttonStyle="secondary" onClick={() => dispatch(userLogOut())}>
        Logout
      </Button>
    </div>
  );
}

export default Header;
