<template>
  <div v-show="bool" class="page msg_success js_show">
    <div class="weui-msg">
      <div class="weui-msg__icon-area">
        <i class="weui-icon-success weui-icon_msg"></i>
      </div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title">登出成功</h2>
        <p class="weui-msg__desc">
          <!-- 内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
          <a href="javascript:void(0);">文字链接</a>-->
        </p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <a href="javascript:;" class="weui-btn weui-btn_primary">重新登录</a>
          <a href="javascript:;" class="weui-btn weui-btn_default">退出一罐</a>
        </p>
      </div>
      <div class="weui-msg__extra-area">
        <div class="weui-footer">
          <p class="weui-footer__links">
            <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
          </p>
          <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../js/bus.js"; //引入总线

export default {
  data() {
    return {
      bool: 0
    };
  },
  created() {
    // 监听  logout 传过来的事件
    bus.$on("XlogOutOk", () => {
      this.bool = true;
    });
  }
};
</script>
