<template>
  <div id="app">
    <div>
      <newHeader  :title="'树洞' " :ev="aa" ></newHeader>
      <xmain/>
    </div>
  </div>
</template>

<script>
import xmain from "../../components/xmain";
import newHeader from "../../components/newHeader";

export default {
  data(){ 
   var  edeaa=this
    return{
     aa: function(){
         edeaa.$router.push({ name:'redact'});
     }
    }
  },
  components: {
    xmain,
    newHeader
  }

};
</script>



