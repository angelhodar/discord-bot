const axios = require("axios");
const { openproject_api_key } = require("../config");

const auth = {
  username: "apikey",
  password: openproject_api_key,
};

const op_client = axios.create({
  baseURL: "https://openproject.fidesol.org/api/v3",
  auth
});

const getWorkPackages = async (count) => {
  const { data } = await op_client.get(`/work_packages?pageSize=${count}`);
  return data._embedded.elements.map(wpackage => {
    return {
      subject: wpackage.subject,
      description: wpackage.description.raw,
      createdAt: wpackage.createdAt,
      percentageDone: wpackage.percentageDone,
      storyPoints: wpackage.storyPoints
    }
  });
};

module.exports = { getWorkPackages }
