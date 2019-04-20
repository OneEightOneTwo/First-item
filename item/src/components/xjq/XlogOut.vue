<template>
  <div v-show='bool' class="container" id="container" >
    <div class="page msg js_show">
      <!-- <div class="page__hd">
        <h1 class="page__title">Msg</h1>
        <p class="page__desc">提示页</p>
      </div> -->
      <div class="page__bd page__bd_spacing">
        <a @click="sureLogOut" href="#msg_success" class="weui-btn weui-btn_default" style="width:200px;">确认退出</a>
        <a @click="cancelLogOut" href="#msg_warn" class="weui-btn weui-btn_default" style="width:200px;">取消</a>
      </div>
    </div>
  </div>
</template>

 <script>
import bus from "../../js/bus.js";

export default {
    data(){
        return{
            bool:0
        }
    },
    created() {
    // 监听  XchangeInfo 传过来的事件 和 接收传 XchangeInfo 过来的 data
    bus.$on("XlogOut", () => {
      this.bool = true;
    })
  },
  methods:{
    sureLogOut(){
      // 通知 XlogOutOk 组件出现
      bus.$emit("XlogOutOk");  
      this.bool = false;    //隐藏logout页面
      document.cookie = '';
    },
    //点取消时，logout 页面消失，个人信息页面出现
    cancelLogOut(){
      bus.$emit("backToInfo");  
      this.bool = false;
    }
  }
}
</script>

<style>
    .page__bd_spacing{
        margin-top: 240px;
    }
</style>

