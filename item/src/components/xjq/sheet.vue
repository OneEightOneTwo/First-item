<template>
  <div class="discover">
    <ul class="notice">
      <li v-for="(t,index) in not_data" :key="index" :data-id="t.user_id">
        <div class="user_head">
          <span class="hphoto" @click="showGallery(t.user_headphoto)">
            <!-- <img :src="t.user_headphoto" alt="" 
                        
            >-->
          </span>
        </div>
        <div class="user_main" >
          <p class="user_name" v-text="t.user_name"></p>
          <p class="user_age">
            <span class="user_sexage">
              <span class="sex" v-text="t.user_sex"></span>
              <span>&nbsp;</span>
              <span class="age" v-text="t.user_age"></span>
            </span>
          </p>
          <p class="user_say" v-text="t.user_say"></p>
          <div class="user_photo">
            <span
              class="user_img"
              v-for="(t,index) in t.user_showimg"
              :key="index"
              @click.stop="showGallery(t)"
            >
              <!-- <img :src="t" alt=""
              >-->
            </span>
          </div>
          <p class="time_dis">
            <span class="time" v-text="t.pushtime"></span>
            ·
            <span class="distance" v-text="t.distance"></span>
          </p>
          <div class="m_bottom">
            <span class="like">
              <svg style="display:block" class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
              <svg style="display:none" class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianzan1"></use>
              </svg>
            </span>
            <span @click="dianzan(index)" class="likenum" v-text="t.likenum"></span>
            <span class="reply">
              <svg class="icon liuyan" aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
              </svg>
            </span>
            <span class="replynum" v-text="t.replynum"></span>
            <!-- <span class="more">
              <i class="dot"></i>
              <i class="dot"></i>
              <i class="dot"></i>
            </span>-->
          </div>
        </div>
      </li>
    </ul>
    <!-- <Xgallery/> -->
  </div>
</template>
<style>
.iconfont.icon-aixin1.changecolor {
  color: red;
}
.discover {
  flex: 1;
  overflow: auto;
}
.notice {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.notice li {
  position: relative;
  padding-top: 0.277778rem;
  list-style: none;
  width: 100%;
  border-bottom: 2px #e4e8eb solid;
  display: flex;
}
.notice li .user_head {
  width: 1.342593rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.notice li .user_head .hphoto {
  width: 1rem;
  height: 1rem;
  background: red;
  border-radius: 50%;
  overflow: hidden;
}
.notice li .user_head .hphoto img {
  width: 100%;
  height: 100%;
}
.notice li .user_main {
  flex: 1;
  padding-left: 0.222222rem;
}
.user_name {
  color: #414141;
  font-size: 0.462963rem;
  line-height: 0.462963rem;
  padding-top: 0.064815rem;
  color: #373e46;
}
.user_age .user_sexage {
  margin-top: 0.175926rem;
  display: block;
  width: 0.87037rem;
  height: 0.398148rem;
  background: #fe4c98;
  border-radius: 17px;
  color: white;
  text-align: center;
  line-height: 0.398148rem;
  font-size: 0.12037rem;
}
.user_say {
  font-size: 0.462963rem;
  color: #373e46;
  line-height: 0.462963rem;
  margin-top: 0.342593rem;
}
.user_photo {
  margin-top: 0.231481rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.user_photo .user_img {
  width: 2.666667rem;
  height: 2.685185rem;
  background: red;
  margin-right: 0.055556rem;
  border-radius: 5px;
  margin-bottom: 0.055556rem;
  overflow: hidden;
}
.user_photo .user_img img {
  width: 100%;
  height: 100%;
}
.time_dis {
  margin-top: 0.240741rem;
  height: 0.342593rem;
  line-height: 0.342593rem;
  color: #aeb3b7;
  font-size: 0.342593rem;
}
.m_bottom {
  width: 100%;
  height: 1.666667rem;
  display: flex;
  align-items: center;
  padding-left: 7rem;
}
.m_bottom span {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.m_bottom .like i {
  font-size: 0.648148rem;
  color: #252525;
}
.m_bottom .reply i {
  margin-top: 2px;
  margin-left: 0.574074rem;
  font-size: 0.537037rem;
  color: #252525;
}
.m_bottom .likenum {
<<<<<<< HEAD
  margin-left: 0.1rem;
  font-size: 0.5rem;
}
.m_bottom .replynum {
  margin-left: 0.1rem;
=======
  margin-left: 0.25rem;
  font-size: 0.5rem;
}
.m_bottom .replynum {
  margin-left: 0.305556rem;
>>>>>>> 8d3c64b0317b1d6de805d548c05fe0eb9676d3b3
  font-size: 0.5rem;
}
.m_bottom .more {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 0.481481rem;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 0.592593rem;
}
.dot {
  width: 0.092593rem;
  height: 0.092593rem;
  background: #757575;
  border-radius: 50%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 0.6rem;
}
.liuyan {
  margin-left: 0.3rem;
}
</style>
<script>
import i from "../../../public/iconfont/font_pqa23vfmvk/font_rjx4w0pg0us/iconfont.js";

// 预览图
// import Xgallery from "./Xgallery.vue";
// import state from "../../../observable.js";
export default {
  data() {
    return {
      not_data: [
        {
          id: "01",
          user_id: "01",
          // user_headphoto:require('../../../assets/400 X 400.jpg'),
          user_name: "茂茂",
          user_sex: "♀",
          user_age: "30",
          user_say: "新动态 , 点个赞吧",
          // user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
          pushtime: "21分钟前",
          distance: "5.3km",
          haslike: 1, //是否已点赞
          likenum: "5",
          replynum: "1"
        },
        {
          id: "02",
          user_id: "01",
          // user_headphoto:require('../../../assets/400 X 400.jpg'),
          user_name: "茂茂",
          user_sex: "♀",
          user_age: "30",
          user_say: "新动态 , 点个赞吧",
          // user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
          pushtime: "21分钟前",
          distance: "5.3km",
          haslike: 0,
          likenum: "5",
          replynum: "1"
        },
        {
          id: "02",
          user_id: "01",
          // user_headphoto:require('../../../assets/400 X 400.jpg'),
          user_name: "茂茂",
          user_sex: "♀",
          user_age: "30",
          user_say: "新动态 , 点个赞吧",
          // user_showimg:['../../../assets/bigimgblack2.jpg','../../../assets/bigimgblack2.jpg'],
          pushtime: "21分钟前",
          distance: "5.3km",
          haslike: 0,
          likenum: "5",
          replynum: "1"
        }
      ],
      change: ""
    };
  },
  // components: {
  // Xgallery
  // },
  methods: {
    //预览图片
    showGallery(src) {
      this.state.isgallery.src = src;
      this.state.isgallery.bool = true;
    },
    like(index) {
      // console.log(this.$refs.likecolor[index].offsetHeight)
      if (this.not_data[index].haslike == 1) {
        this.not_data[index].haslike = 0;
        this.not_data[index].likenum--;
      } else {
        this.not_data[index].haslike = 1;
        this.not_data[index].likenum++;
      }
    },
    // gotodetail(id) {
    //   // console.log(111)
    //   this.$router.push({ name: "detail", params: { id } });
    // },
    dianzan(index) {
      this.not_data[index].likenum ++;
    },
    components:{
      i
    }
  }
  // computed: {
  //   //用这个来拿公有数据
  //   state() {
  //     return state;
  //   }
  // }
};
</script>