import "./employee.css";
import { useState } from "react";

export default function Formdetails() {
  // const [detailsarray, setDetailsarray] = useState([]);
  const detailsarray = [];
  const [inputs, setInputs] = useState({});
  var result = "hello";

  function InputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function Formsubmit(e) {
    e.preventDefault();
    console.log(inputs);
    // setDetailsarray((previvalue) => ({ ...previvalue, inputs }));
    // console.log(JSON.stringify(detailsarray));
    detailsarray.push(inputs);
    console.log(JSON.stringify(detailsarray));
    result = JSON.stringify(detailsarray);
    console.log(result);
  }
  return (
    <>
      <form onSubmit={Formsubmit}>
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
                onChange={InputChange}
                value={inputs.firstname}
              ></input>
              <input
                type={"text"}
                placeholder="Last name"
                className="inputs"
                name="lastname"
                onChange={InputChange}
                value={inputs.lastname || ""}
              ></input>
            </div>
            <div className="elements">
              <div className="label">DOB</div>
              <input
                type={"date"}
                className="inputs"
                name="DOB"
                onChange={InputChange}
                value={inputs.DOB || ""}
              ></input>
            </div>
            <div className="elements">
              <div className="label">Gender</div>
              <div>
                <input
                  type={"radio"}
                  name="gender"
                  className="radioelements"
                  onChange={InputChange}
                  value={"Male"}
                ></input>
                <label>Male</label>

                <input
                  type={"radio"}
                  name="gender"
                  className="radioelements"
                  onChange={InputChange}
                  value={"Female"}
                ></input>
                <label>Female</label>

                <input
                  type={"radio"}
                  name="gender"
                  className="radioelements"
                  onChange={InputChange}
                  value={"others"}
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
                onChange={InputChange}
                value={inputs.role || ""}
              ></input>
            </div>
            <div className="elements">
              <div className="label">Mobile Number</div>
              <input
                type={"number"}
                placeholder="enter 10 digit number"
                className="inputs"
                name="mobilenumber"
                onChange={InputChange}
                value={inputs.mobilenumber || ""}
              ></input>
            </div>

            <div className="elements">
              <div className="label">Address</div>
              <input
                type={"text"}
                placeholder="Line1"
                className="inputs"
                name="line1"
                onChange={InputChange}
                value={inputs.line1 || ""}
              ></input>
              <input
                type={"text"}
                placeholder="Line2"
                className="inputs"
                name="line2"
                onChange={InputChange}
                value={inputs.line2 || ""}
              ></input>
              <input
                type={"text"}
                placeholder="Line3"
                className="inputs"
                name="line3"
                onChange={InputChange}
                value={inputs.line3 || ""}
              ></input>
            </div>
            <div className="elements">
              <div className="label">Nationality</div>
              <input
                type={"text"}
                placeholder="Country"
                className="inputs"
                name="nationality"
                onChange={InputChange}
                value={inputs.nationality || ""}
              ></input>
            </div>
            <div className="elements submitdiv">
              <input type={"submit"} className="submitbutton"></input>
            </div>
            <div>{result}</div>
          </div>
        </div>
      </form>
    </>
  );
}
