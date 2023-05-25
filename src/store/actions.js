import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  //promise
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => commit("SET_USER", data))
  //     .catch((err) => console.log(err));
  // },

   //async
  async FETCH_USER({ commit }, name) {
    const res = await fetchUserInfo(name);
    commit("SET_USER", res.data);
    return res; 
  },
  async FETCH_ITEM({ commit  }, id) {
    const res = await fetchCommentItem(id)
    commit("SET_ITEM", res.data);
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit("SET_LIST", res.data);
    return res;
  }
};
