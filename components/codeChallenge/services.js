import axios from "axios";

let getProducts = (payload) => {
    console.log(getProducts)

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/products",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

export {getProducts}