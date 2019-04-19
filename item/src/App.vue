<template>
  <div>
    <router-view></router-view>
    <!-- <xfooter></xfooter> -->
  </div>
</template>

<script>
import xfooter from "./components/xfooter";
export default {
   components: {
      xfooter
    }
};
</script>

<style>
#app {
  overflow: hidden;
}
</style>
