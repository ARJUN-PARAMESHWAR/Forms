import "./employee.css";
import { useState } from "react";
export default function Formdetails() {
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
  function InputChange(e, func) {
    func(e.target.value);
  }

  function Formsubmit() {
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
    Resetvalues();
  }
  function Resetvalues() {
    setFirstName("");
    setlastName("");
    setDOB("");
    setRole("");
    setMobilenumber("");
    setNationality("");
    setline1("");
    setline2("");
    setline3("");
  }

  function Deleterow(i) {
    let temp = inputs.filter((item, j) => {
      return i !== j;
    });
    setInputs(temp);
  }

  function Populate(i) {
    setFirstName(inputs[i].firstName);
    setlastName(inputs[i].lastName);
    setDOB(inputs[i].DOB);
    setRole(inputs[i].role);
    setMobilenumber(inputs[i].mobilenumber);
    setNationality(inputs[i].nationality);
    setline1(inputs[i].line1);
    setline2(inputs[i].line2);
    setline3(inputs[i].line3);
  }
  var accord_flag = true;

  function Expandcontent(e) {
    var location = e.target.id;
    location = parseInt(location);
    console.log(typeof location);
    var temp1 = document.getElementById(`content${location}`);
    console.log(temp1);
    if (accord_flag === true) {
      temp1.classList.add("accordion_content_show");
      console.log(temp1.classList, accord_flag);
      accord_flag = false;
      console.log(accord_flag);
    } else if (accord_flag === false) {
      temp1.classList.remove("accordion_content_show");
      console.log(temp1.classList, accord_flag);
      accord_flag = true;
    }
  }

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
                value={"Male"}
              ></input>
              <label>Male</label>

              <input
                type={"radio"}
                name="gender"
                className="radioelements"
                onChange={(e) => InputChange(e, setGender)}
                value={"Female"}
              ></input>
              <label>Female</label>

              <input
                type={"radio"}
                name="gender"
                className="radioelements"
                onChange={(e) => InputChange(e, setGender)}
                value={"Others"}
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
              type={"text"}
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
            <button className="submitbutton" onClick={Resetvalues}>
              Clear
            </button>
          </div>
        </div>
        <div className="list">
          <div className="headers">
            <h3>Employee Details</h3>
          </div>
          <ul>
            {inputs.length > 0 &&
              inputs.map((item, i) => (
                <li>
                  <div
                    className="accordion_head"
                    id={i + 1}
                    onClick={Expandcontent}
                  >
                    {`Employee number ${i + 1}`}
                    <span class="fa-solid fa-plus" id={`plus${i + 1}`}></span>
                  </div>

                  <div className="accordion_content" id={`content${i + 1}`}>
                    <br></br>
                    {`Name: ${item.firstName} ${item.lastName}`}
                    <br></br>
                    {`DOB: ${item.DOB}`}
                    <br></br>
                    {`Role: ${item.role}`}
                    <br></br>
                    {`Gender: ${item.Gender}`}
                    <br></br>
                    {`Mobile Number: ${item.mobilenumber}`}
                    <br></br>
                    {`Address: ${item.line1} ${item.line2} ${item.line3}`}
                    <br></br>
                    {`Nationality: ${item.nationality}`}
                    <br></br>
                    <button onClick={() => Populate(i)}>Populate</button>
                    <button onClick={() => Deleterow(i)}>Delete</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
