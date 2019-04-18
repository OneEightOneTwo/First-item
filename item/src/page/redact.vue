<template>
  <div>
    <div class="ceshi">
      <newHeader :back="'hot'" :title="'树洞' " :ev="aa"></newHeader>
      
  </div>
</template>

<script>
import newHeader from "../components/newHeader.vue";
export default {
  components: {
    newHeader
  },

  methods: {
    toget() {
      this.$router.push({ name: "hot" });
    }
  }
};
</script>

<style scoped>
</style>
