<template>
   <div id="app">
    <newHeader :title="'树洞' " :ev="aa" ></newHeader>
    <xmain/>
    <xfooter tab="0"/>
  </div>
</template>

<script>
import xmain from "../../components/xmain";
import newHeader from "../../components/newHeader";
import xfooter from "../../components/xfooter";

export default {
  
  data() {
    var edeaa = this;
    return {
      aa: function() {
        edeaa.$router.push({ name: "redact" });
      }
    };
  },
  components: {
    xmain,
    newHeader,
    xfooter
  }
};
</script>



