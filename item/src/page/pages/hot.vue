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
import newnewtext from "../../components/newHeader";//钟林2代版本  终极测试
export default {
  components: {
    xmain,
    newHeader
  }
};
</script>



