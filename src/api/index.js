import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};


const fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

const fetchCommentItem = (id) => {
  return axios.get(`${config.baseUrl}item/${id}.json`);
};

export {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
};
