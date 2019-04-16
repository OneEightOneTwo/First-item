<template>
  <div id="app">
    <!-- <xheader></xheader>
 
    <xmain></xmain>
    <xfooter></xfooter> -->
    <router-view></router-view>
  </div>
</template>

<script>
import xheader from "./components/xheader.vue"; 
import xfooter from "./components/xfooter.vue";
import xmain from "./components/xmain.vue";

export default {
  name: "app",
  components: {
    xheader,
    xfooter,
    xmain
  },


};
</script>

<style>
#app {
overflow: hidden;
}
</style>
