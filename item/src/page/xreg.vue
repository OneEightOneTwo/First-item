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
export default {
  naem: "xreg",
  methods: {
    log() {
      // 跳路由
      this.$router.push({ name: "xlog" });
      // console.log("log");
    },
    reg() {
      var nickname = this.username;
      var password = this.password;
      var re_password = this.re_password;

      this.$http
        .post(
          "http://120.79.172.103:8000/user/api/register/",
          `nickname=${nickname}&password=${password}&re_password=${re_password}`
        )
        .then(response => {
          console.log(response);
        });
    }
  }
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
