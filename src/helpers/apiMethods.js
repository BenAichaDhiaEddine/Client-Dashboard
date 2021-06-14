import axios from "axios";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3009/v1"
    : "prodServer";

const Client = axios.create({
  baseURL,
});

const token = localStorage.getItem("token");
const config = {
  headers: {
    "x-access-token" : `${token}`
  },
};

// POST action
const post = (url, data) => {
  return Client.post(url, data, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};

// GET action
const get = (url) => {
  return Client.get(url, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("err :",err )
      throw err.response.data;
      
    });
};

// PATCH action
const patch = (url, data) => {
  return Client.patch(url, data, config)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response.data;
    });
};
//put
const  update =  (url, data) => {
  return Client.put(url, data, config)
    .then((response) => {
      return response.data;
      
    })
    .catch((err) => {
      throw err.response.data;
    });
};

// DELETE action
const remove = (url) => {
  return Client.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export { get, post, remove, patch,update };
