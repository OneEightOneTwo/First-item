var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
        username: "wang",
        password: '123'
    };
    dbo.collection("user").insertOne(myobj, (err, res) => { //插入一条数据
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});







// MongoClient.connect(url, { useNewUrlParser: true }, (err,db)=> {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("student").insertOne(myobj,(err, res)=> {//插入一条数据
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });





// MongoClient.connect(url, { useNewUrlParser: true }, (err,db)=> {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("student").deleteOne(myobj,(err, res)=> {//删除一条数据
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var myobj =  [
//         { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
//         { name: 'Google', url: 'https://www.google.com', type: 'en'},
//         { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
//        ];
//     dbo.collection("student").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var whereStr = { name: '菜鸟工具' };  // 查询条件并且删除符合条件
//     dbo.collection("student").deleteMany(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("project");
//      var whereStr = {"name":'菜鸟'};  // 查询条件
//     dbo.collection("student").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });






// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("project");
//      var whereStr = {"name":/o/};  // 查询模糊条件
//     dbo.collection("student").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });