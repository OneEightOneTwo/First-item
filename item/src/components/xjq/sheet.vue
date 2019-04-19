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
        <div class="user_main" @click="gotodetail(t.user_id)">
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
              <i
                class="iconfont icon-aixin1"
                @click.stop="like(index)"
                :class="{
                                    'changecolor':t.haslike == 1
                                }"
              ></i>
            </span>
            <span class="likenum" v-text="t.likenum">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </span>
            <span class="reply">
              <i class="iconfont icon-xinxi1"></i>
            </span>
            <span class="replynum" v-text="t.replynum"></span>
            <!-- <span class="more">
              <i class="dot"></i>
              <i class="dot"></i>
              <i class="dot"></i>
            </span> -->
          </div>
        </div>
      </li>
    </ul>
    <Xgallery/>
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
  margin-left: 0.25rem;
  font-size:0.5rem;
}
.m_bottom .replynum {
  margin-left: 0.305556rem;
  font-size:0.5rem;
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
</style>
<script>


// 预览图
// import Xgallery from "../../../components/Xgallery.vue";
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
    gotodetail(id) {
      // console.log(111)
      this.$router.push({ name: "detail", params: { id } });
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