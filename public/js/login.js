$(() => {
  $(".login-button").click(() => {
    let username = $("#username").val();
    let password = $("#password").val()
    if (username || password) {
      //判断cookie是否有值
      // if ('up') {
      //   console.log('有');
      // } else {
      //   console.log("么有")
      // }
      $.ajax({
        url: "http://localhost:3000/login",
        type: 'post',
        data: {
          username: username,
          password: password
        },
        success: ((str) => {
          if (str) {
            setCookie('user', str, 1);
            window.location.href = 'http://localhost:3000';
          } else {
            alert('账号或密码错误')
          }
        })
      })
    } else {
      alert('密码或账号不能为空')
    }
  })
})