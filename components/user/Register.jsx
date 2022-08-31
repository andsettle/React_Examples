import React, { useState } from "react";
import { registerUser } from "../../services/calls";
import toastr from "toastr";

function Regsiter() {
  const [userData, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
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

  const register = () => {
    registerUser(userData).then(toastr.success).catch(toastr.error);
  };

  return (
    <React.Fragment>
      <h1 className="text-center">Register</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-center">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                value={userData.email}
                name="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="userExample@email.com"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                We'll probably share your email with someone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                First Name
              </label>
              <input
                name="firstName"
                value={userData.firstName}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Sabio"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                Please enter the user's first name in the form field above.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                name="lastName"
                value={userData.lastName}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="User"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                Please enter the user's last name in the form field above.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                name="password"
                value={userData.password}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="PaSsWoRd!1"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                Password should be super complicated plz.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input
                name="passwordConfirm"
                value={userData.passwordConfirm}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="PaSsWoRd!1"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                This is the same field as before, you got this champ.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Profile URL
              </label>
              <input
                name="avatarUrl"
                value={userData.avatarUrl}
                type="url"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="https://www.exampleURL.com/Avatar"
                onChange={onFormFieldChange}
              />
              <div id="emailHelp" class="form-text">
                Provide a URL for the image you would like to represent your
                profile.
              </div>
              {/* There should probably be some form of input for tenant ID down here, but none have been included */}
            </div>
            <button onClick={register} type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Regsiter;
