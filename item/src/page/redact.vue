<template>
  <div id="app">
    <newHeader :back="'hot'" :title="'树洞'"></newHeader>
    <div class="main">
      <div class="cont">
        <div class="conte">
          <span class="left" v-text="getWeekDate()"></span>
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

           <div class="uploadImgBtn" id="uploadImgBtn">
       <input class="file"  type="file" multiple />

    </div>
    <div class="clik">发布</div>
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
      }
    },
      

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

  overflow: hidden;
}
.main .cont .conte {
  background: #fff;
  border-radius: 5px;
}
.main .cont .conte .left {
  float: left;
  font-size: 16px;
  height: 55px;
  line-height: 53px;
  padding-left: 10px;
}

.main .cont .conte textarea {
  height: 200px;
}


   .uploadImgBtn {
overflow: hidden;
   
        height: 50px;
        cursor: pointer;
        position: relative;
        background: url("") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        border: 1px solid #ccc;
        text-align: center;
        line-height:50px;
    }

    .uploadImgBtn .uploadImg {
        position: absolute;
        right: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }

    .pic{
        width: 100px;
        height: 100px;
    }
    .pic img {
        width: 100%;
        height: 100%;
    }
    .clik{
      height: 50px;
      width: 100%;
    cursor: pointer;
      line-height:50px;
      font-size: 16px;
      text-align: center;
    }


</style>
