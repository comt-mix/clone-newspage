<template>
  <div>
    <div v-for="ask in fetchedAsk" :key="ask.id">{{ ask.title }}</div>
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
    ...mapGetters([
    "fetchedAsk"
    ])
  },
  created() {
    this.$store.dispatch("FETCH_ASKS")
  },

};
</script>

<style></style>
