<template>
  <div>
    <newHeader title="遇见"/>
    <div id="lx">
      <a
        @click="biubiu(a.title)"
        v-for="(a,index) in haoyou"
        :key="index"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" src="../assets/logo.png" alt>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="a.title">标题</h4>
          <p class="weui-media-box__desc" v-text="a.content">内容</p>
        </div>
      </a>
    </div>
    <xfooter />
  </div>
</template>
<script>
//引入头部组件
import newHeader from "../components/newHeader.vue";
import store from "../js/vuex.js";
import xfooter from "../components/xfooter.vue";
export default {
  store,
  data() {
    return {
      haoyou: [
        {
          title: "我是一个标题1",
          content:
            "我是一段比短的内容文字啊啊啊啊啊啊啊啊1我是一段比短的内容文字啊啊啊啊啊啊啊啊1"
        },
        {
          title: "我是一个标题3",
          content:
            "我是一段比短的内容文字啊啊啊啊啊啊啊啊3我是一段比短的内容文字啊啊啊啊啊啊啊啊3"
        },
        {
          title: "我是一个标题2",
          content: "我是一段比短的内容文字啊啊啊啊啊啊啊啊2"
        }
      ],
      isok: true
    };
  },
  components: {
    newHeader,
    xfooter
  },
  methods: {
    biubiu(title) {
      this.$store.state.count = title;
      this.$router.push({ name: "chat" });
    }
  }
};
</script>

<style scoped>
#lx {
  margin-top: 50px;
}
</style>

