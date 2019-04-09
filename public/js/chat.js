$(function () {
    // 实例化一个WebSocket对象，实现WebSocket双工通信
    var socket = new WebSocket('ws://10.3.138.123:3001'); //WebSocket
    //监听服务端广播过来的消息
    socket.onmessage = function (msg) {
        console.log(msg.data);
        $('#info').html($('#info').html() + '<p>广播信息：' + msg.data + '</p>')
    }
    $('#btn').on('click', () => {
        socket.send($('#text').val());
    })
}) //jq入口