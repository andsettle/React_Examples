import axios from "axios";
import toastr from "toastr"

let registerUser = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

let userLogin = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config).then(toastr.success).catch(toastr.error);
};

let getFriends = () => {

    const config = {
      method: "GET",
      url: "https://localhost:50001/api/friends",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config)
  };



export {registerUser, userLogin, getFriends}