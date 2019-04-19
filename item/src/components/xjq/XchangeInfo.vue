<template>
  <div v-show="bool" class="page__bd" style="display: none">
    <!-- <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div> -->
    <!-- <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">单行列表</div>
        <div class="weui-cell__ft" style="font-size: 0">
          <span style="vertical-align:middle; font-size: 17px;">详细信息</span>
          <span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span>
        </div>
      </div>
    </div> -->

    <!-- <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div> -->
    <div class="weui-cells"  style='margin-top:0px;'>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            @click="showGallery()"
            style="width: 50px;display: block"
            
          >
          <!-- <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span> -->
        </div>
        <div class="weui-cell__bd">
          <input  @click="changeName()" class="changeName" v-model='name'>
          <input placeholder="修改签名"  class="changeSignature" v-model='signature'>
        </div>
      </div>
      <div  class="weui-cell weui-cell_select   changeSex">性别：
                <div class="weui-cell__bd">
                    <select class="weui-select"  name="select1" v-model='sex'>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
      </div>
      <div class="weui-cell">
            <div class="weui-cell__hd"><label for="" class="weui-label">出生日期：</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="date" value="" v-model='value'>
            </div>
      </div>
      <div  @click="backToInfo()" class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <span  style="vertical-align: middle">保存</span>
          <!-- <span class="weui-badge" style="margin-left: 5px;">New</span> -->
          <!-- <span class="weui-cell__ft">详细信息</span> -->
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../js/bus.js";


export default {
  data(){
    return {
        bool: '',
        name:'',
        signature:'',
        sex :'',
        value : ''
    };
  },
  created() {
    // 监听  XperInfo 传过来的事件
    bus.$on("changeInfo",data =>{
      this.bool = true;
      this.name = data.name;
      this.signature = data.signature;
      this.value = data.value;
      this.sex = data.sex;
    });
  },
  methods:{
      //点击保存，获取所有值，然后把所有值带到个人信息
      backToInfo(){
        //   console.log(this.sex,this.value,this.signature,this.name)
          // 通知changeInfo组件出现
          bus.$emit("changeInfo1",{  //里面的第一个参数只要与  bus.$on 监听参数一样即可   
              name:this.name,              //点击保存的时候，把修改后的信息带到个人页
              signature: this.signature,
              sex:this.sex,
              value:this.value
          });  
          this.bool = false;    //隐藏修改页面
      },
      changeName(){
        this.name = '';
      }
  }
}
</script>

<style >
    .changeName{
        border:none;
        height: 21px;
        outline:none;
        display:inline-block;
        font-size: 17px;
        color:black;
    }
    .changeSignature{
        border:none;
        outline:none;
        display:inline-block;
        color:black;
        height: 15px;
        font-size: 13px;
    }
    .changeSex{
        margin-left: 16px;
    }
</style>
