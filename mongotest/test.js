var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/mongotest', { useNewUrlParser: true },
    function(err, client) {
        console.log('Connected to MongoDB!');
        var db = client.db('node_db')
        var collection = db.collection('servants');
        collection.insert({ 'name': 'Nameless' }, function(err, docs) {
            console.log(docs.length + ' records inserted.');
            console.log(docs[0].name + '-' + docs[0]._id);
            db.close();
        });
    });