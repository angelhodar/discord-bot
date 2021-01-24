const axios = require("axios");


const auth = {
  username: "apikey",
  password: process.env.OPENPROJECT_API_KEY,
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
