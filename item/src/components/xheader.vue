<template>
  <div class="header">
    <div class="head">树洞</div>
    <div class="head-right" @click="toredact()">
      <img src="../assets/compile.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name: "xheader",
  methods: {
    toredact() {
      //跳路由
      this.$router.push({ name: "redact" });
    }
  }
};
</script>
<style scoped>
.header {
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: black;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.head {
  text-align: center;
}
.head-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.head-right img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>

