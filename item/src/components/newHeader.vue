<template>
  <div class="header">
    <!-- 左侧按钮 -->
    <div class="back" @click="backf(back)" v-if="back"  >返回</div>
    <div class="head" v-text="title"></div>
    <!-- 右侧按钮 -->
    <div class="head-right" @click="ev" v-if="ev">
      <img src="../assets/compile.jpg">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "用户名"
    };
  },
  props: {
    back: String,
    title: String,
    ev: Function
  },
  methods: {
    backf(value) {
      this.$router.push({ name: value }
      
      
      );
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
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.head-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.back {
  position: absolute;
  left: 10px;
  top: 0;
  font-size: 16px;
}
img {
  box-sizing: border-box;
  width: 70%;
  height: 70%;
}
</style>
