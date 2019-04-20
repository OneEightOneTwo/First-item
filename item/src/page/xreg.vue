<template>
  <div id="xlog">
    <h1>一&nbsp;&nbsp;罐</h1>
    <input type="text" placeholder="username" v-model="username">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="confirm password" v-model="re_password">
    <input type="button" value="已注册" @click="log()">
    <input type="button" value="注册" @click="reg()">
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  naem: "xreg",
  data() {
    return {
      username: "",
      password: "",
      re_password: ""
    };
  },
  // computed:{},
  methods: {
    log() {
      // 跳路由
      this.$router.push({ name: "xlog" });
    },
    reg() {
      if (
        this.username.indexOf(" ") == -1 &&
        this.password.indexOf(" ") == -1 &&
        this.username &&
        this.password
      ) {
        this.$http
          .post(
            "http://120.79.172.103:8000/user/api/register/",
            `nickname=${this.username}&password=${this.password}&re_password=${
              this.re_password
            }`
          )
          .then(response => {
            if (response.data.data == "username alread exist") {
              alert("用户名已注册");
            } else if (response.data.data.uid) {
              alert(
                "注册成功,您是第" +
                  response.data.data.uid +
                  "位加入一罐的小伙伴"
              );
            } else {
              alert("未知错误");
            }
          });
      } else {
        alert("不能输入含有空格的字符");
      } //if-else-----------
    }
  } //methods------
};
</script>

<style scoped>
#xlog {
  font-family: sans-serif;
  background: #fff;
  width: 100%;
  padding: 50px 0;
  text-align: center;
}
h1 {
  color: #000;
  text-transform: uppercase;
  font-weight: 500;
}
input[type="text"],
input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 230px;
  outline: none;
  color: bule;
  border-radius: 24px;
  transition: 0.25s;
}
input[type="text"]:focus,
input[type="password"]:focus {
  font-size: 18px;
  width: 280px;
  border-color: #2ecc71;
}
input[type="button"] {
  border: 0;
  background: none;
  display: inline-block;
  margin: 20px 10px;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: bule;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}
input[type="button"]:focus {
  background: #2ecc71;
}
</style>
