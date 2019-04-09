var express = require('express');
var router = express.Router();




// 链接数据库
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let object = require('mongodb').ObjectId; //引用MongoDB的 ObjectId，才能找到数据库的id

// Connection URL
const url = 'mongodb://localhost:27017'; //数据库端口

// Database Name
const dbName = '8888'; //数据库名字

let db = '';
// Use connect method to connect to the server
MongoClient.connect(url, {
  useNewUrlParser: true
}, function (err, client) {
  assert.equal(null, err);
  // console.log("Connected successfully to server");
  db = client.db(dbName);
  // client.close();
});


// 当打开manage页面，查询数据库，把mongoDB里面的数据 docs 返回前端
router.use('/manage', (req, res) => { //获取到manage页面发送过来的ajax请求
  db.collection('zsgc').find().toArray(function (err, docs) { //查询数据库的资料 docs是数据查询到的数据
    assert.equal(err, null);
    // console.log(docs);
    // res.send(docs);
    res.send({
      "code": 0,
      "msg": "",
      "count": 1000,
      "data": docs
    }) //把数据返回到前端 即manage页面
  });
})


// 当打开change页面，查询数据库，把mongoDB里面的数据 docs 返回前端
router.use('/change', (req, res) => { //获取到change页面发送过来的ajax请求
  db.collection('zsgc').find().toArray(function (err, docs) {
    assert.equal(err, null);
    // console.log(docs);
    // res.send(docs);
    res.send({
      "code": 0,
      "msg": "",
      "count": 1000,
      "data": docs
    })
  });
});


// 当打开userInfo页面，插入数据到数据库
router.use('/userInfo', (req, res) => { //获取到userInfo页面发送过来的ajax请求
  // 得到的obj对象格式
  obj = {
    'name': req.body.name,
    'diqu': req.body.diqu,
    'sex': req.body.sex,
    'wealth': req.body.wealth
  }
  // obj = {
  //   'name': 1,
  //   'diqu': 2,
  //   'sex': 3,
  //   'wealth': 4
  // }
  db.collection("zsgc").insertOne(obj, (err, res) => { //把obj对象里面的值插入一条数据到数据库
    if (err) throw err;
    console.log("文档插入成功");
    // db.close();
  });

});

//删除数据
router.use('/change', (req, res) => {
  req.on('data', function (data) { //收到change页面 传过来的data   是一个id

    let str = data.toString();
    data.toString(); //解码，得到字符串
    console.log(str);
    var myobj = {
      '_id': object(str)
    };
    db.collection("zsgc").deleteOne(myobj, (err, res) => { //删除对应的id的那一条
      if (err) throw err;
      // console.log("文档删除成功");
      // db.close();
    });
  })
});






// //连接数据库
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// //增加
// router.use('/z', function (req, res, next) {
//   res.send('z');
// });

// //删除
// router.use('/s', function (req, res, next) {
//   res.send('s');
// });

// //更改
// router.use('/g', function (req, res, next) {
//   res.send('g');
// });

// //查询
// router.use('/c', function (req, res, next) {
//   MongoClient.connect(url, {
//     useNewUrlParser: true
//   }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("8888");
//     var whereStr = {}; // 查询条件
//     dbo.collection("zsgc").find(whereStr).toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       res.send(result);
//       db.close();
//     });
//   });
// });

module.exports = router;