<template>
  <div>
    <router-view></router-view>
    <xfooter/>
  </div>
</template>

<script>
// 底部组件
import xfooter from "../components/xfooter";

export default {
  components: {
    xfooter
  }
};
</script>

<style>
</style>
