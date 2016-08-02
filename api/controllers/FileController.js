"use strict";

/**
 * FileController
 * @description :: Server-side logic for ...
 */
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
const Response = require('../services/ResponseBuilderService');
const mime = require('mime');
// var dirname = require('path')
var SkipperDisk = require('skipper-disk');

module.exports = {
    upload: function(req, res) {
        UploadService.uploadFile(req, res);
    },
    download: function(req, res) {
        const pk = actionUtil.requirePk(req);

        File.findOne(pk).then(function(file) {
            if (!file) return res.notFound();

            var dirname = sails.config.odin.uploadFolder + '/' + file.dataset + '/' + file.fileName;

            var fileAdapter = SkipperDisk();

            var extension = file.fileName.split('.').pop();
            res.set('Content-Type', mime.lookup(extension));
            res.set('Content-Disposition', 'attachment; filename=' + file.name + '.' + extension);

            LogService.winstonLog('verbose', 'file downloaded', {
                ip: req.ip,
                resource: pk
            });

            fileAdapter.read(dirname).on('error', function(err) {
                console.dir(err);
                return res.serverError(err);
            }).pipe(res);
        }).fail(function(err) {
            if (err) console.error(err);

            return res.negotiate();
        });
    },
    contents: function(req, res) {
        const pk = actionUtil.requirePk(req);

        File.findOne(pk).then(function(file) {
            if (!file) return res.notFound();
            FileType.findOne(file.type).then(function(filetype) {
                if (!filetype) return res.notFound();
                if (filetype.api) {

                    var builder = new Response.ResponseGET(req, res, true);
                    builder.contentsQuery(file.dataset, file.fileName, function(data) {

                        return res.ok(data, {
                            meta: builder.meta(' '),
                            links: builder.links(' ')
                        });
                    });
                } else {
                    return res.forbidden();
                }
            });
        });
    },
    resources: function(req, res) {
        var resources = {};
        const pk = actionUtil.requirePk(req);

        this.findResource(_Map, pk)
            .then(function(maps) {
                if (!_.isEmpty(maps))
                    resources[maps] = maps;
                this.findResource(View, pk)
                    .then(function(views) {
                        if (!_.isEmpty(views))
                            resources[views] = views;
                        this.findResource(Chart, pk)
                            .then(function(charts) {
                                if (!_.isEmpty(charts))
                                    resources[charts] = charts;
                                return res.ok(resources);
                            });
                    }.bind(this));
            }.bind(this));
    },
    findResource(model, filePk) {
        return model.find({
            file: filePk
        });
    }
};