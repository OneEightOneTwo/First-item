<template>
  <div class="weui-search-bar" :class="{'weui-search-bar_focusing':bool}" id="search">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input v-model="searchInput"  type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required
        >
        <a href="javascript:" class="weui-icon-clear"  @click="ceclick" id="searchClear"></a>
      </div>
      <label
        class="weui-search-bar__label"
        @click="toclick"
        id="searchText"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a @click="toclick" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
    //控制搜索框
      bool: false,
     searchInput: ""
    };
  },
  methods: {
    toclick() {
       
      this.bool = !this.bool;
    },
    ceclick() {   
 
     this.searchInput = "";
    }
  }
};
</script>

<style scoped>

</style>


