<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapState({
    //   asks: state => state.asks
    // }) mapState로 사용하는 방법
    // ask() {
    //   return this.$store.state;
    // } computed로 사용하는 방법
    ...mapGetters(["fetchedAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>

<style></style>
