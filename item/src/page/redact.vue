<template>
  <div>
    <div class="ceshi" @click="toget()">编辑</div>
  </div>
</template>

<script>
export default {
  methods: {
    toget() {
      this.$router.push({ name: "hot" });

    }
  }
};
</script>

<style scoped>

</style>
