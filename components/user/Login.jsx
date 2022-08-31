import React, { useState } from "react";
import { userLogin } from "../../services/calls";

function Login() {
  const [loginData, setState] = useState({
    email: "",
    password: "",
    tenantId: "U02T53UKMNH",
  });

  const onFormFieldChange = (e) => {
    const target = e.target;
    const newStateValue = target.value;
    const nameOfField = target.name;
    console.log(nameOfField, newStateValue);

    setState((prevState) => {
      const newStateObject = { ...prevState };
      newStateObject[nameOfField] = newStateValue;

      return newStateObject;
    });
  };

  const loginUser = (loginData) => {
    userLogin(loginData);
  };
  return (
    <React.Fragment>
      <h1>Login</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 text-center">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={loginData.email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="userExample@email.com"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={loginData.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="PaSsWoRd!1"
                onChange={onFormFieldChange}
              />
            </div>
            <button
              onClick={loginUser}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
