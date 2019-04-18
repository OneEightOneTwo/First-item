<template>
  <div id="xlog">
    <h1>一&nbsp;&nbsp;罐</h1>
    <input type="text" placeholder="username">
    <input type="password" placeholder="password">
    <input type="button" value="未注册" @click="reg()">
    <input type="button" value="登陆">
  </div>
</template>

<script>
export default {
  naem: "xlog",
  methods: {
    reg() {
      // 跳路由
      this.$router.push({ name: "xreg" });
      // console.log("reg");
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
inpu                                                                                                                                                                                                                                                                                                                                 mm {
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
}
input[type="button"]:focus {
  background: #2ecc71;
}
</style>
