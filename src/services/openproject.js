const axios = require("axios");

const auth = {
  username: "apiKey",
  password: process.env.OPENPROJECT_API_KEY,
};

const op_client = axios.create({
  baseURL: "https://openproject.fidesol.org/api/v3",
  auth
});

const getWorkPackages = (count) => {
  // TODO: Implement query
};

module.exports = { getWorkPackages }
