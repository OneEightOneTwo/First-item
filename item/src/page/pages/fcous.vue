<template>
  <div id="app">
    <div style="height:50px;">
      <newHeader title="信仰"></newHeader>
    </div>
    <Xgallery></Xgallery>
    <XperInfo></XperInfo>
    <XchangeInfo></XchangeInfo>
    <XlogOut></XlogOut>
    <XlogOutOk></XlogOutOk>
  </div>
</template>

<script>
import Xgallery from "../../components/xjq/Xgallery.vue";
import XperInfo from "../../components/xjq/XperInfo.vue";
import XchangeInfo from "../../components/xjq/XchangeInfo";
import XlogOut from "../../components/xjq/XlogOut";
import XlogOutOk from "../../components/xjq/XlogOutOk";
import newHeader from "../../components/newHeader";
export default {
  components: {
    Xgallery,
    XperInfo,
    XchangeInfo,
    XlogOut,
    XlogOutOk,
    newHeader
  }
};
</script>

<style>
</style>