var express = require('express');
var router = express.Router();
router.get('/1', function (req, res, next) {
    res.send('8888888888888888888888');
});
router.post('/', (req, res) => {
    // let body = "";
    // console.log(req.query.username)
    // res.send('1');
    // req.on('data', (funck) => {
    // body += funck;
    // const user = Buffer.from(body, 'utf8'); //取传到后端的值
    // console.log(user.toString());
    // //将传到后端的值切割
    // let us = user.toString().split('&')[0];
    // let use = us.toString().split('=')[1]; //切割得到的账号
    // let pa = user.toString().split('&')[1];
    // let pas = pa.toString().split('=')[1]; //切割得到的密码
    // console.log(pas) //切割传进去的
    let user = req.body;
    let use = req.body.username;
    let pas = req.body.password;

    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        let dbo = db.db("8888"); //数据名
        let whereStr = {
            username: use
        };
        dbo.collection("user").find(whereStr).toArray(function (err, result) {
            if (err) throw err;
            console.log(result.length) //查询user表得到的name值

            if (result.length != 0) {
                if (use == result[0].username && pas == result[0].password) { //通过查询比较账号密码
                    console.log('对了');
                    // let user1 = user.toString('base64'); //加密
                    res.send(user);
                } else {
                    console.log('错了了');
                    res.send();
                }
            } else {
                console.log('不存在')
                res.send();
            }
            db.close();
        });
    });
})

module.exports = router;