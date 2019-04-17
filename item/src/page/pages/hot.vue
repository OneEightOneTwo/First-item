<template>
  <div id="app">
    <div>
      <newHeader :back="'xlog'" :title="'树洞' "></newHeader>
      <xmain/>
    </div>
  </div>
</template>

<script>
import xmain from "../../components/xmain";
import newHeader from "../../components/newHeader";
import hot from "../../components/newHeader";/////
export default {
  components: {
    xmain,
    newHeader
  }
};
</script>



