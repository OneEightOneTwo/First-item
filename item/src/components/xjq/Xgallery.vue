<template>
  <div class="page gallery js_show">
    <div @click="hideGallery" v-show="bool" class="weui-gallery" style="display: block">
        <span class="weui-gallery__img" :style="{
        'backgroundImage': `url(${touxiang})`
    }"></span>
        <!-- <div class="weui-gallery__opr">
            <a href="javascript:" class="weui-gallery__del">
                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
            </a>
        </div> -->
    </div>
</div>
</template>

<script>
import bus from "../../js/bus.js";

export default {
  data(){
    return {
      touxiang: "",
      bool: false
    };
  },
  created() {
    // 监听  XperInfo 传过来的事件
    bus.$on("showGallery", data => {
      this.touxiang = data.touxiang;
      this.bool = true;
    });
  },
  methods:{
    hideGallery() {
      bus.$emit("changeInfo");
      this.bool = false;
    }
  }
}
</script>


<style scoped>
</style>