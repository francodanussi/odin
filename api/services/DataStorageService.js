var MongoClient = require('mongodb').MongoClient;

module.exports = {

    mongoConnect: function(dataset, filename, res, cb) {
        // Connect to the db
        MongoClient.connect("mongodb://" + sails.config.odin.dataStorage.host + ":" +
            sails.config.odin.dataStorage.port + "/" + dataset,
            function(err, db) {
                if (err && !res.headersSent) return res.negotiate(err);
                cb(db);
            });
    },
    mongoSave: function(dataset, filename, json, res) {
        json = _.transform(json, function(result, each) {
            result.push(_.mapKeys(each, function(value, key) {
                return _.replace(key, ".", " ");
            }));
        }, [])
        DataStorageService.mongoConnect(dataset, filename, res, function(db) {
            var collection = db.collection(filename);
            collection.insert(json, {
                w: 1
            }, function(err) {
                if (err && !res.headersSent) return res.negotiate(err);
            });
            db.close();
        });
    },
    mongoCount: function(dataset, filename, res, cb) {
        if (!_.isNull(filename)) {
            DataStorageService.mongoConnect(dataset, filename, res, function(db) {
                var collection = db.collection(filename);
                collection.count({}, function(err, count) {
                    if (err) console.error(err);
                    cb(count);
                });
                db.close();
            });
        }
    },
    deleteCollection: function(dataset, filename, res) {
        if (!_.isNull(filename)) {
            DataStorageService.mongoConnect(dataset, filename, res, function(db) {
                db.collection(filename).drop();
                db.close();
            });
        }
    }
};