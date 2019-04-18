<template>
  <div class="weui-tabbar">
    <a
      @click="toTab(index)"
      v-for="(t,index) in tabbar"
      :key="index"
      class="weui-tabbar__item"
      :class="{'weui-bar__item_on':tab===index}"
    >
      <span style="display: inline-block;position: relative;">
        <img :src="img" alt class="weui-tabbar__icon">
      </span>
      <p class="weui-tabbar__label" v-text="t.title"></p>
    </a>
  </div>
</template>

<script>
import img from "../assets/icon_tabbar.png";
export default {
  name: "xfooter",
  data() {
    return {
      img,
      tabbar: [
        // badge打数字
        { title: "树洞", name: "hot" },
        { title: "通讯录", name: "chat" },
        // isBadge这是打红点
        { title: "我", name: "fcous" }
      ],
      // 默认的下标值
      tab: 0
    };
  },
  methods: {
    // 切换底部选项卡
    toTab(tab) {
      this.tab = tab;
      let name = this.tabbar[tab].name;
      // 跳路由
      this.$router.push({ name });
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>




