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
 <div  v-for="(val,index) in box" :key="index" v-show="num==index">{{ val.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xmain",
  data(){
    return {
      num: 0,
      list: [
        { name: "热门" },
        { name: "最新" },
        { name: "关注" },

      ],

      box: [
         { name: "热门" },
        { name: "最新" },
        { name: "关注" },
  
      ]
    }
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
  height: 900px;
}
.main1 div {
  height: 100%;
}
</style>

