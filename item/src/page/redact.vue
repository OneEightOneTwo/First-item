<template>
  <div id="app">
    <newHeader :back="'hot'" :title="'树洞'"></newHeader>
    <div class="main">
      <div class="cont">
        <div class="conte">
          <span v-text="getWeekDate()"></span>
          <span class="right" style="float:right">
            <iframe
              name="weather_inc"
              src="http://i.tianqi.com/index.php?c=code&id=5&py=guangzhou"
              width="200"
              height="30"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
            ></iframe>
          </span>

          <textarea placeholder="没人知道你是谁，             
辣鸡
          " contenteditable="true"></textarea>
        </div>
      </div>
    </div>
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
    },
    getWeekDate() {
      var now = new Date();
      var day = now.getDay();
      var weeks = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var week = weeks[day];
      return week;
    },
    data() {
      return {
        news: []
      };
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/base.css");
textarea {
  outline: none;
  width: 100%;
  border: none;
}
.main {
  margin-top: 50px;
  background: rgb(235, 230, 230);
}
.main .cont {
  padding: 8px;
  border: #fff solid 2px;
  overflow: hidden;
}
.main .cont .conte {
  background: #fff;
  border-radius: 5px;
}


.main .cont .conte textarea{
  height: 300px
  
}
</style>
