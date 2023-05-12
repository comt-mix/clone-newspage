<template>
  <div>
    <ul class="new-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="points">
          {{ item.points}}
        </div>
        <a :href="item.url">{{ item.title }}</a>
        <small
          >{{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
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
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
.new-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
</style>
