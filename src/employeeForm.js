function employeeForm() {
  return (
    <form>
      <div className="fullContainer">
        <div
          className="container text-center"
          style={{ backgroundColor: "#6d9bc8" }}
        >
          {/*  row1   */}
          <div className="row py-2">
            <div className="col-3 text-start ps-3 pe-0">Name</div>
            <div className="col-4 ps-0 pe-2">
              <input
                id="firstName"
                class="form-control form-control-sm"
                type={"text"}
                placeholder="First Name"
              ></input>
            </div>
            <div className="col-4 ps-2 pe-2">
              <input
                class="form-control form-control-sm"
                type={"text"}
                placeholder="Last Name"
              ></input>
            </div>
          </div>
          {/*  row2   */}
          <div className="row py-2">
            <div className="col-3 text-start">Date of Birth</div>
            <div className="col-3 px-0">
              <input
                class="form-control form-control-sm"
                type={"date"}
                placeholder="dd/mm/yyyy"
              ></input>
            </div>
          </div>
          {/*  row3   */}
          <div className="row py-2 text-start">
            <div className="col-3 text-start">Gender</div>
            <div className="col px-0">
              <input type={"radio"} name="gender"></input>
              <label for="male">Male</label>
            </div>
            <div className="col px-0">
              <input type={"radio"} name="gender"></input>
              <label>Female</label>
            </div>
            <div className="col px-0">
              <input type={"radio"} name="gender"></input>
              <label for="">Others</label>
            </div>
          </div>

          {/*  row4   */}

          <div className="row py-2">
            <div className="col-3 text-start">Role</div>
            <div className="col ps-0">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="e-g: Developer"
              />
            </div>
          </div>

          {/*  row5   */}

          <div className="row py-2">
            <div className="col-3 text-start">Employee-id</div>
            <div className="col ps-0">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="e-g: 1PS001"
              />
            </div>
          </div>

          {/*  row6   */}

          <div className="row py-2">
            <div className="col-3 text-start">Mobile No.</div>
            <div className="col ps-0">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="exclude (+91)"
              />
            </div>
          </div>

          {/*  row7   */}

          <div className="row py-2">
            <div className="col-3 text-start">Nationality</div>
            <div className="col-4 ps-0">
              <select class="form-control form-control-sm">
                <option value="" disabled selected>
                  Choose your country
                </option>
                <option>India</option>
                <option>U.S.</option>
                <option>U.K</option>
                <option>Singapore</option>
                <option>Malaysia</option>
              </select>
            </div>
          </div>

          {/*  row8   */}

          <div className="row py-2">
            <div className="col-3 text-start">Address</div>
            <div className="col ps-0">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Line1"
              />
              <input
                class="form-control form-control-sm my-2"
                type="text"
                placeholder="Line2"
              />
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Line3"
              />
            </div>
          </div>

          {/*  row9   */}

          <div className="row py-2 col d-flex justify-content-center">
            <div>
              <button type="button" className="btn btn-dark">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default employeeForm;
