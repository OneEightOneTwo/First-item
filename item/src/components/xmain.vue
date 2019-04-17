<template>
  <div class="main">
    <div class="nav">
      <ul>
        <li
          @click="click1(index)"
          v-for="(laji,index) in list"
          :key="index"
          :class="{'cur':num==index}"
        >{{ laji.name }}</li>
      </ul>
    </div>
    <div class="main1">
      <div v-show="num===0">
        <div class="article">
          <div class="username">!辣鸡钟林</div>
          <p>
            哈哈哈哈哈啊哈哈哈哈啊啊啊啊啊啊啊啊啊
            哈哈哈哈哈啊哈哈哈哈啊啊啊啊啊啊啊啊啊
            哈哈哈哈哈啊哈哈哈哈啊啊啊啊啊啊啊啊啊
          </p>
          <div class="text-bottom">
            <span class="time">6分钟</span>
            <div class="right">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="num===1">最新</div>
      <div v-show="num===2">关注</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xmain",
  data() {
    return {
      num: 0,
      list: [{ name: "热门" }, { name: "最新" }, { name: "关注" }]
    };
  },

  methods: {
    click1(index) {
      this.num = index;
    }
  }
};
</script>
<style scoped>
.main {
  overflow: hidden;
  margin-top: 50px;
}
.main .nav {
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  border: 1px solid #ccc;
  background: #fff;
}
.main .nav li {
  list-style: none;
  float: left;
  padding: 10px;
}
.cur {
  background-color: #ccc;
}
.main1 {
  margin-top: 50px;
}

.article {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.username {
  height: 20px;
  padding: 10px;
}
</style>

