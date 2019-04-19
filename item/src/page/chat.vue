<template>
  <div class="chat">
    <newHeader :title="title" back="xlist"/>
    <div class="top">
      <biubiu/>
    </div>
    <div class="bottom">
      <input type="text">
      <button>发送</button>
    </div>
  </div>
</template>

<script>
import biubiu from "./pages/biubiu.vue";
import newHeader from "../components/newHeader.vue";
import store from "../js/vuex.js";
export default {
  store,
  data() {
    return {};
  },
  components: {
    biubiu,
    newHeader
  },
  computed: {
    title() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
.chat {
  overflow: hidden;

  padding-top: 50px;
}
.top {
  overflow: hidden;
  padding: 15px 5px;
}
.bottom {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px  8px;
}
.bottom input {
  box-sizing: border-box;
  border: 0;
  background: none;
  float: left;
  border: 2px solid #c5c5c5;
  padding: 5px 10px;
  outline: none;
  width: 75%;
  color: #000;
  border-radius: 24px 5px 5px 24px;
}
.bottom button {
  float: left;
  width: 20%;
  box-sizing: border-box;
  height: 29px;
  border: 2px solid #c5c5c5;
  outline: none;
  background: #eee;
  border-radius: 5px 15px 15px 5px;
  margin-left: 1%;
}
</style>
