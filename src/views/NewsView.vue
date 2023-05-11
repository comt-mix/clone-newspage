<template>
  <div>
    <div v-for="data in this.$store.state.news" :key="data.id">{{ data.title }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_NEWS")

  },
};
</script>

<style></style>
