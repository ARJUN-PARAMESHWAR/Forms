import { useState } from "react";
import "./LoginPage.css";

function Loginpage() {
  const [loginDetails, setLoginDetails] = useState({});

  function UserCredentials(e) {
    const key = e.target.name;
    const value = e.target.value;

    console.log(key, value);
    setLoginDetails((prevValue) => ({ ...prevValue, [key]: value }));
  }

  function Credentialcheck(e) {
    e.preventDefault();

    console.log(loginDetails.username.length, loginDetails.password.length);

    if (
      loginDetails.username.length >= 5 &&
      loginDetails.password.length >= 5
    ) {
      alert(`Welcome to the page ${loginDetails.username}`);
      window.open("./employeeform", "_self");
    } else {
      alert("Please enter valid credentials");
      setLoginDetails("");
    }
  }

  return (
    <>
      <div className="basecontainer">
        <div className="container">
          <div className="header">Employee login</div>
          <div className="input1">
            <span>Username</span>
            <input
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={UserCredentials}
              value={loginDetails.username || ""}
            />
          </div>

          <div className="input2">
            <span>Password</span>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={UserCredentials}
              value={loginDetails.password || ""}
            />
          </div>
          <div className="loginButton">
            <span onClick={Credentialcheck}>Login</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
