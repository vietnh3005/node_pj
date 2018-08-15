//require the mongoClient from mongodb module

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'node_db';
const clt = 'masterf';
const master = [{
        'name': 'Bel Leonhart'
    },
    { 'name': 'Luciana Lucy Licifer' }
];

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected.");
    const db = client.db(dbName);

    var a = 1;
    var b = ++a;
    console.log(a);
    console.log(b);
    setTimeout(function() {
        console.log('I am the bone of my sword.');
    }, 3000);

    // db.collection(clt).insertMany(master, function(err, r) {
    //     if (!err) {
    //         console.log("Inserted: " + r.insertedCount + " records.");

    //     } else {
    //         console.log("Cannot insert.");
    //     }
    // });
    client.close();
});