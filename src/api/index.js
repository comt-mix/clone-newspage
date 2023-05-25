import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchUserInfo = async(username) => {
  try {
    const response = await axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error)
  } 
};

const fetchCommentItem = async(id) => {
  try {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error)
  }
};

const fetchList = async(pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    //or
    //return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error)
  }
};

export {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
};
