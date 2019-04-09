const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nodejs-project';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  // console.log("Connected successfully to server");
  //选择库
  const db = client.db(dbName);
  //选择表 集合
  db.collection('user-info').find().toArray(function (err, res) {
    assert.equal(err, null);
    console.log(res)
  });
  client.close();
});