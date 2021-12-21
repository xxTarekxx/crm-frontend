import React, { useState } from "react";
import Login from "../login/Login";
import "./landing.css";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div>
      <Login handleOnchange={handleOnChange} email={email} password={password} />
    </div>
  );
}
