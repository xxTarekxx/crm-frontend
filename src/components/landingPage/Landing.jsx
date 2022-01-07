import React, { useState } from "react";
import Log from "../login/Login";
import ResetPassword from "../reset-password/ResetPassword";
import "./landing.css";

export default function Landing() {
  const [formLoading, setFormLoading] = useState("Log")

  function formTrigger(frmType){
    setFormLoading(frmType);
  };
  return (
    <div>
    {formLoading === "Log" && (
      <Log 
        formTrigger={formTrigger}
      />)}
    {formLoading === "ResetPassword" && (<ResetPassword />)}
    </div>
  );
}
