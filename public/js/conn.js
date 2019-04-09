
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/project';//连接服务器
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("project");//创建数据库名
    dbase.createCollection('user', function (err, res) {//创建表
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});



