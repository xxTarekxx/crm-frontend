import React from "react";
import Landing from "./components/landingPage/Landing";
import Log from "./components/login/Login";



import Signup from "./components/signup/Signup";

function App() {
  return (
    <div>
    <Log />
    <Signup />
      <Landing />
    </div>
  );
}

export default App;
