<template>
  <div v-show="bool" class="page__bd">
    <!-- <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div> -->
    <!-- <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">单行列表</div>
        <div class="weui-cell__ft" style="font-size: 0">
          <span style="vertical-align:middle; font-size: 17px;">详细信息</span>
          <span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span>
        </div>
      </div>
    </div>-->

    <!-- <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div> -->
    <div class="weui-cells" style="margin-top:0px;">
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img @click="showGallery()" style="width: 50px;display: block">
          <!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span> -->
        </div>
        <div class="weui-cell__bd">
          <p v-text="name"></p>
          <p v-text="signature" style="font-size: 13px;color: #888888;"></p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          性别：
          <span style="vertical-align: middle">
            <span v-text="sex"></span>
          </span>
          <!-- <span class="weui-badge" style="margin-left: 5px;">8</span> -->
        </div>
        <!-- <div class="weui-cell__ft"></div> -->
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          畜生日期：
          <span style="vertical-align: middle">
            <span v-text="value">1990-05-20</span>
          </span>
          <!-- <span class="weui-badge" style="margin-left: 5px;">8</span> -->
        </div>
        <!-- <div class="weui-cell__ft"></div> -->
      </div>
      <div @click="changeInfo()" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <span style="vertical-align: middle">修改信息</span>
          <!-- <span class="weui-badge" style="margin-left: 5px;">New</span> -->
          <!-- <span class="weui-cell__ft">详细信息</span> -->
        </div>
        <div class="weui-cell__ft"></div>
      </div>
      <div @click="logOut" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          退出登录
          <span style="vertical-align: middle">
            <span></span>
          </span>
          <!-- <span class="weui-badge" style="margin-left: 5px;">8</span> -->
        </div>
        <!-- <div class="weui-cell__ft"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../js/bus.js";
// import touxiang from '../assets/images/touxiang.jpg';


export default {
  data() {
    return {
      // touxiang : '../assets/images/touxiang.jpg',
      bool: 1,
      name: "",
      signature: "",
      value: "",
      sex: "",
      touxiang: "",
      arr: []
    };
  },
  created() {
    // 监听  XchangeInfo 传过来的事件 和 接收传 XchangeInfo 过来的 data
    bus.$on("changeInfo1", data => {
      this.bool = 1;
      this.name = data.name;
      this.signature = data.signature;
      this.value = data.value;
      this.sex = data.sex;
    });
    bus.$on("backToInfo", () => {
      this.bool = 1;
    });
    var _this=this
    function reg() {
      _this.$http
        .get("http://120.79.172.103:8000/user/api/get_profile/")
        .then(response => {
          // this.arr = response.data;
          console.log(response);
        });
    }
    reg();
  },
  methods: {
    showGallery() {
      // 通知Xgallery组件出现
      bus.$emit("showGallery", {
        // touxiang   //把 数据 传到 Xgalley 组件
      });
    },
    changeInfo() {
      // 通知changeInfo组件出现
      bus.$emit("changeInfo", {
        //里面的第一个参数只要与  bus.$on 监听参数一样即可
        name: this.name, //点击 修改 的时候，把个人信息带到修改页作为默认值
        signature: this.signature,
        sex: this.sex,
        value: this.value
      });
      this.bool = 0;
    },
    logOut() {
      // 通知 XlogOut 组件出现
      bus.$emit("XlogOut");
      this.bool = false; //隐藏修改页面
    }
  }
};
</script>

<style>
</style>

