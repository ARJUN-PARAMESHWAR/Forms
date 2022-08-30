import "./employee.css";
import { useEffect, useState } from "react";
export default function Formdetails() {
  console.log("main func");
  const [inputs, setInputs] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [Gender, setGender] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [line1, setline1] = useState("");
  const [line2, setline2] = useState("");
  const [line3, setline3] = useState("");
  const [nationality, setNationality] = useState("");
  const [count, setCount] = useState("");

  function InputChange(e, func) {
    func(e.target.value);
    // setInputs((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function Formsubmit() {
    setCount(1);
    setInputs([
      ...inputs,
      {
        firstName,
        lastName,
        DOB,
        role,
        Gender,
        mobilenumber,
        line1,
        line2,
        line3,
        nationality,
      },
    ]);
    console.log(inputs);
  }

  useEffect(() => {
    console.log(inputs);
  }, [count]);

  return (
    <>
      <div className="baselayout">
        <div className="layout">
          <h1>Employee Form</h1>

          <div className="elements">
            <div className="label">Name</div>

            <input
              type={"text"}
              placeholder="First name"
              className="inputs"
              name="firstname"
              onChange={(e) => InputChange(e, setFirstName)}
              value={firstName}
            ></input>
            <input
              type={"text"}
              placeholder="Last name"
              className="inputs"
              name="lastname"
              onChange={(e) => InputChange(e, setlastName)}
              value={lastName}
            ></input>
          </div>
          <div className="elements">
            <div className="label">DOB</div>
            <input
              type={"date"}
              className="inputs"
              name="DOB"
              onChange={(e) => InputChange(e, setDOB)}
              value={DOB}
            ></input>
          </div>
          <div className="elements">
            <div className="label">Gender</div>
            <div>
              <input
                type={"radio"}
                name="gender"
                className="radioelements"
                onChange={(e) => InputChange(e, setGender)}
                value={Gender}
              ></input>
              <label>Male</label>

              <input
                type={"radio"}
                name="gender"
                className="radioelements"
                onChange={(e) => InputChange(e, setGender)}
                value={Gender}
              ></input>
              <label>Female</label>

              <input
                type={"radio"}
                name="gender"
                className="radioelements"
                onChange={(e) => InputChange(e, setGender)}
                value={Gender}
              ></input>
              <label>Others</label>
            </div>
          </div>
          <div className="elements">
            <div className="label">Role</div>

            <input
              type={"text"}
              placeholder="ex Software Developer"
              className="inputs"
              name="role"
              onChange={(e) => InputChange(e, setRole)}
              value={role}
            ></input>
          </div>
          <div className="elements">
            <div className="label">Mobile Number</div>
            <input
              type={"number"}
              placeholder="enter 10 digit number"
              className="inputs"
              name="mobilenumber"
              onChange={(e) => InputChange(e, setMobilenumber)}
              value={mobilenumber}
            ></input>
          </div>

          <div className="elements">
            <div className="label">Address</div>
            <input
              type={"text"}
              placeholder="Line1"
              className="inputs"
              name="line1"
              onChange={(e) => InputChange(e, setline1)}
              value={line1}
            ></input>
            <input
              type={"text"}
              placeholder="Line2"
              className="inputs"
              name="line2"
              onChange={(e) => InputChange(e, setline2)}
              value={line2}
            ></input>
            <input
              type={"text"}
              placeholder="Line3"
              className="inputs"
              name="line3"
              onChange={(e) => InputChange(e, setline3)}
              value={line3}
            ></input>
          </div>
          <div className="elements">
            <div className="label">Nationality</div>
            <input
              type={"text"}
              placeholder="Country"
              className="inputs"
              name="nationality"
              onChange={(e) => InputChange(e, setNationality)}
              value={nationality}
            ></input>
          </div>
          <div className="elements submitdiv">
            <button className="submitbutton" onClick={Formsubmit} name="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#content">
                <label>
                  Employee Details
                  <span className="fa-solid fa-caret-down"></span>
                </label>
              </a>
              <div className="content"> {JSON.stringify(inputs)}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
