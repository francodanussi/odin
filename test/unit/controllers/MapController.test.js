//-- test/unit/controllers/FileController.test.json
'use strict';

require('sails-test-helper');

const sails = require('sails');
const config = require('../../../config/env/test');
const assert = chai.assert;

chai.use(require('chai-fs'));
chai.use(require('chai-string'));

describe('All Maps', function() {
    describe('GET /maps', function() {
        it('should get all maps', function(done) {
            request.get('/maps')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, result) {
                    assert.property(result.body, 'meta');
                    assert.property(result.body, 'data');
                    assert.property(result.body, 'links');

                    err ? done(err) : done();
                });
        });
    });
});

describe('Single Map', function() {
    var fileId, mapId;

    // Upload geodata CSV file
    describe('POST /files [csv]', function() {
        it('should upload a new file [csv]', function(done) {
            request.post('/files')
                .set('Accept', 'application/json')
                .field('name', 'CSV File')
                .field('description', 'An example file')
                .field('notes', 'Lorem ipsum dolor sit amet...')
                .field('type', 'sWRhpRV')
                .field('status', 'pWRhpRV')
                .field('dataset', 'sWRhpRkh')
                .field('organization', 'hWRhpRV')
                .field('updateFrequency', 'zWRhpR8')
                .field('owner', 'dogPzIz9')
                .field('createdBy', 'dogPzIz9')
                .attach('uploadFile', 'test/assets/geodata.csv')
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function(err, result) {
                    if (!err) {
                        fileId = result.body.data.id;
                        done();
                    } else done(err);
                });
        });
    });

    // Create map
    describe('POST /maps', function() {
        it('should create a new map from the geodata file', function(done) {
            request.post('/maps')
                .set('Accept', 'application/json')
                .field('name', 'Example Map')
                .field('description', 'An example map')
                .field('notes', 'Lorem ipsum dolor sit amet...')
                .field('basemap', 'roadmap')
                .field('latitudeKey', 'LATITUDE')
                .field('longitudeKey', 'LONGITUDE')
                .field('file', fileId)
                .field('createdBy', 'dogPzIz9')
                .expect(201)
                .expect('Content-Type', /json/)
                .end(function(err, result) {

                    assert.property(result.body, 'meta');
                    assert.property(result.body, 'data');
                    assert.property(result.body, 'links');

                    assert.equal(result.body.data.name, 'Example Map');
                    assert.equal(result.body.data.description, 'An example map');
                    assert.equal(result.body.data.notes, 'Lorem ipsum dolor sit amet...');

                    assert.property(result.body.data, 'latitudeKey');
                    assert.property(result.body.data, 'longitudeKey');
                    assert.property(result.body.data, 'geojson');

                    if (!err) {
                        mapId = result.body.data.id;
                        done();
                    } else done(err);
                });
        });
    });

    // Get map
    describe('GET /maps/:id', function() {
        it('should get the map', function(done) {
            request.get(`/maps/${mapId}`)
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, result) {
                    assert.property(result.body, 'meta');
                    assert.property(result.body, 'data');
                    assert.property(result.body, 'links');

                    assert.property(result.body.data.geojson, 'type');

                    if (result.body.data.geojson.type === 'Feature') {
                        assert.property(result.body.data.geojson, 'id');
                        assert.property(result.body.data.geojson, 'geometry');

                        assert.property(result.body.data.geojson.geometry, 'type');
                        assert.equal(result.body.data.geojson.geometry.type, 'Point');

                        assert.property(result.body.data.geojson.geometry, 'coordinates');
                        assert.isArray(result.body.data.geojson.geometry.coordinates);

                        assert.property(result.body.data.geojson, 'properties');
                    } else {
                        assert.equal(result.body.data.geojson.type, 'FeatureCollection');

                        assert.property(result.body.data.geojson, 'features');
                        assert.isArray(result.body.data.geojson.features);

                        result.body.data.geojson.features.forEach(function(element) {
                            assert.property(element, 'id');
                            assert.isNumber(element.id);

                            assert.property(element, 'geometry');
                            assert.property(element.geometry, 'type');
                            assert.equal(element.geometry.type, 'Point');

                            assert.property(element.geometry, 'coordinates');
                            assert.isArray(element.geometry.coordinates);
                            assert.isNumber(element.geometry.coordinates[0]);
                            assert.isNumber(element.geometry.coordinates[1]);

                            assert.property(element, 'properties');
                        }, this);
                    }

                    err ? done(err) : done();
                });
        });
    });
});