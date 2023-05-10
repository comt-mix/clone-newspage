<template>
  <div>
    <div v-for="data in news" :key="data.id">{{ data.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => (this.news = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
