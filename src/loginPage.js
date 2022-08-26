// import { useState } from "react";
import "../src/loginPage.css";

function LoginPage() {
  // const [loginDetails, setLoginDetails] = useState({});

  function UserCredentials(e) {
    const username = e.target.name;
    const password = e.target.value;
    console.log(username, password);
  }

  function Submithandle() {}

  return (
    <>
      <form onSubmit={Submithandle}>
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={UserCredentials}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={UserCredentials}
          />
        </div>

        <input type={"submit"}>Login</input>
      </form>
    </>
  );
}

export default LoginPage;
