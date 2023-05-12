<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import { mapState } from "vuex";
// import { mapGetters } from "vuex";

export default {
  components: { ListItem },
  created() {
    return this.$store.dispatch("FETCH_ASKS");
  },
  // computed: {
  // 1. mapState 적용한 방법
  //   // ...mapState({
  //   //   asks: state => state.asks
  //   // })

  // 2. mapGetters 적용한 방법
  //   ...mapGetters(["fetchedAsk"]),
  // },
};
</script>
