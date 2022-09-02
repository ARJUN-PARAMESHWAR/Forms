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
  const [employeecount, setEmployeecount] = useState(1);
  function InputChange(e, func) {
    func(e.target.value);
  }

  function Formsubmit() {
    setEmployeecount(employeecount + 1);

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

  function Savevalues(i) {
    setFirstName(firstName);
    setlastName(lastName);
    setDOB(DOB);
    setRole(role);
    setMobilenumber(mobilenumber);
    setNationality(nationality);
    setline1(line1);
    setline2(line2);
    setline3(line3);
    inputs[i].firstName = firstName;
    inputs[i].lastName = lastName;
    inputs[i].DOB = DOB;
    inputs[i].role = role;
    inputs[i].Gender = Gender;
    inputs[i].mobilenumber = mobilenumber;
    inputs[i].line1 = line1;
    inputs[i].line2 = line2;
    inputs[i].line3 = line3;
    inputs[i].nationality = nationality;
    Resetvalues();
  }
  function Expandcontent(e) {
    let location = e.target.id;
    location = parseInt(location);

    //  element
    let plus_icon = document.getElementById(`plus ${location}`);
    let content_div = document.getElementById(`content${location}`);
    // Class availability
    let class_available_div = content_div.classList.contains(
      "accordion_content_show"
    );
    let class_available_plus = plus_icon.classList.contains("rotatedplus");

    //condition
    if (class_available_div && class_available_plus) {
      content_div.classList.remove("accordion_content_show");
      plus_icon.classList.remove("rotatedplus");
    } else {
      content_div.classList.add("accordion_content_show");
      plus_icon.classList.add("rotatedplus");
    }
  }

  function Plusrotate(e) {
    let pluslocation = e.target.id;
    var splitting = pluslocation.split(" ");
    splitting = parseInt(splitting[1]);

    //  element
    let plus_icon1 = document.getElementById(`${pluslocation}`);
    let content_div1 = document.getElementById(`content${splitting}`);

    // Class availability
    let class_available_plus1 = plus_icon1.classList.contains("rotatedplus");
    let class_available_div1 = content_div1.classList.contains(
      "accordion_content_show"
    );

    //condition
    if (class_available_plus1 && class_available_div1) {
      plus_icon1.classList.remove("rotatedplus");
      content_div1.classList.remove("accordion_content_show");
    } else {
      plus_icon1.classList.add("rotatedplus");
      content_div1.classList.add("accordion_content_show");
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
              id="hiddenInput"
              type={"hidden"}
              value={employeecount}
            ></input>
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
            {/* <button onClick={Savevalues}>Save</button> */}
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
                    <span
                      className={`fa-solid fa-plus`}
                      id={`plus ${i + 1}`}
                      onClick={Plusrotate}
                    ></span>
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
                    <button className="editbutton" onClick={() => Populate(i)}>
                      Edit
                      <i class="fa-duotone fa-pencil spacing"></i>
                    </button>
                    <button
                      className="savebutton"
                      onClick={() => Savevalues(i)}
                    >
                      Save
                      <i class="fa-regular fa-cloud spacing"></i>
                    </button>
                    <button
                      className="deletebutton"
                      onClick={() => Deleterow(i)}
                    >
                      Delete
                      <i class="fa-duotone fa-trash spacing"></i>
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
