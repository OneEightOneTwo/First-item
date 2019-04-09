//连接数据库
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) throw err;
    var dbo = db.db("8888"); //数据库名
});







// MongoClient.connect(url, { useNewUrlParser: true }, (err,db)=> {
//     if (err) throw err;
//     var dbo = db.db("project");//数据库名
//     var myobj = { name: "菜鸟教程", url: "www.runoob" };
//     dbo.collection("表名").insertOne(myobj,(err, res)=> {//插入一条数据
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });





// MongoClient.connect(url, { useNewUrlParser: true }, (err,db)=> {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var myobj = { name: "菜鸟教程"};
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
//     var whereStr = { username: 'wang' };  // 查询条件并且删除符合条件
//     dbo.collection("student").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     });
// });





// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// var ObjectID = require('mongodb').ObjectID; //
// MongoClient.connect(url, {
//     useNewUrlParser: true
// }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("project");
//     var whereStr = {
//         _id: ObjectID('5ca4a7e3b498503a849fd224') //
//     }; // 查询条件
//     dbo.collection("user").find(whereStr).toArray(function (err, result) {
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