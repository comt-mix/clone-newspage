import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
    .then(({ data }) => commit("SET_NEWS", data))
    .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
    .then(({data}) => commit("SET_JOBS", data))
    .catch(err => console.log(err));
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
    .then(({data}) => commit("SET_ASKS", data))
    .catch(err => console.log(err))
  }
}