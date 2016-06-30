"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
    routes: {

        // Users

        'POST /users/login': 'User.login', // LOGOUT missing!!!
        'GET /users/refreshToken': 'User.refreshToken',

        'DELETE /users/:id': {
            controller: 'Delete',
            model: 'user',
            action: 'delete'
        },
        'POST /users/:id/restore': {
            controller: 'Delete',
            model: 'user',
            action: 'restore'
        },

        'GET /users/search': {
            blueprint: 'search',
            model: 'user',
            // policy: 'isAuthenticated'
        },
        'GET /users/first': {
            blueprint: 'first',
            model: 'user',
            // policy: 'isAuthenticated'
        },

        'GET /users/last': {
            blueprint: 'last',
            model: 'user',
            // policy: 'isAuthenticated'
        },

        'PATCH /users/:id': {
            blueprint: 'update',
            model: 'user',
            // policy: 'isAuthenticated'
        },

        'OPTIONS /users': {
            controller: 'Options',
            model: 'user',
            action: 'collection'
        },
        'OPTIONS /users/login': {
            controller: 'Options',
            model: 'user',
            action: 'custom'
        },

        'OPTIONS /users/first': {
            controller: 'Options',
            model: 'user',
            action: 'query'
        },
        'OPTIONS /users/last': {
            controller: 'Options',
            model: 'user',
            action: 'query'
        },

        'OPTIONS /users/count': {
            controller: 'Options',
            model: 'user',
            action: 'query'
        },

        'OPTIONS /users/:id': {
            controller: 'Options',
            model: 'user',
            action: 'instance'
        },

        'HEAD /users/*': {
            controller: 'Head',
            action: 'Head',
            model: 'user'
        },
        'HEAD /users': {
            controller: 'Head',
            action: 'Head',
            model: 'user'
        },

        // Organizations
        'DELETE /organizations/:id': {
            controller: 'Delete',
            model: 'organization',
            action: 'delete'
        },
        'POST /organizations/:id/restore': {
            controller: 'Delete',
            model: 'organization',
            action: 'restore'
        },

        'GET /organizations/first': {
            blueprint: 'first',
            model: 'organization',
            // policy: 'isAuthenticated'
        },

        'GET /organizations/last': {
            blueprint: 'last',
            model: 'organization',
            // policy: 'isAuthenticated'
        },

        'GET /organizations/search': {
            blueprint: 'search',
            model: 'organization',
            // policy: 'isAuthenticated'
        },

        'PATCH /organizations/:id': {
            blueprint: 'update',
            model: 'organization',
            // policy: 'isAuthenticated'
        },
        'HEAD /organizations/*': {
            controller: 'Head',
            action: 'Head',
            model: 'organization'
        },
        'HEAD /organizations': {
            controller: 'Head',
            action: 'Head',
            model: 'organization'
        },

        'OPTIONS /organizations': {
            controller: 'Options',
            model: 'organization',
            action: 'collection'
        },
        'OPTIONS /organizations/:id': {
            controller: 'Options',
            model: 'organization',
            action: 'instance'
        },
        'OPTIONS /organizations/first': {
            controller: 'Options',
            model: 'organization',
            action: 'query'
        },
        'OPTIONS /organizations/last': {
            controller: 'Options',
            model: 'organization',
            action: 'query'
        },
        'OPTIONS /organizations/count': {
            controller: 'Options',
            model: 'organization',
            action: 'query'
        },


        // Categories
        'DELETE /categories/:id': {
            controller: 'Delete',
            model: 'category',
            action: 'delete'
        },
        'POST /categories/:id/restore': {
            controller: 'Delete',
            model: 'category',
            action: 'restore'
        },
        'GET /categories/first': {
            blueprint: 'first',
            model: 'category',
            // policy: 'isAuthenticated'
        },
        'GET /categories/last': {
            blueprint: 'last',
            model: 'category',
            // policy: 'isAuthenticated'
        },
        'GET /categories/search': {
            blueprint: 'search',
            model: 'category',
            // policy: 'isAuthenticated'
        },
        'PATCH /categories/:id': {
            blueprint: 'update',
            model: 'category',
            // policy: 'isAuthenticated'
        },
        'HEAD /categories/*': {
            controller: 'Head',
            action: 'Head',
            model: 'category'
        },
        'HEAD /categories': {
            controller: 'Head',
            action: 'Head',
            model: 'category'
        },

        'OPTIONS /categories': {
            controller: 'Options',
            model: 'category',
            action: 'collection'
        },
        'OPTIONS /categories/:id': {
            controller: 'Options',
            model: 'category',
            action: 'instance'
        },
        'OPTIONS /categories/first': {
            controller: 'Options',
            model: 'category',
            action: 'query'
        },
        'OPTIONS /categories/last': {
            controller: 'Options',
            model: 'category',
            action: 'query'
        },
        'OPTIONS /categories/count': {
            controller: 'Options',
            model: 'category',
            action: 'query'
        },


        // Statuses

        'GET /statuses/first': {
            blueprint: 'first',
            model: 'status',
            // policy: 'isAuthenticated'
        },
        'GET /statuses/last': {
            blueprint: 'last',
            model: 'status',
            // policy: 'isAuthenticated'
        },
        'GET /statuses/search': {
            blueprint: 'search',
            model: 'status',
            // policy: 'isAuthenticated'
        },
        'PATCH /statuses/:id': {
            blueprint: 'update',
            model: 'status',
            // policy: 'isAuthenticated'
        },
        'HEAD /statuses/*': {
            controller: 'Head',
            action: 'Head',
            model: 'status'
        },
        'HEAD /statuses': {
            controller: 'Head',
            action: 'Head',
            model: 'status'
        },

        'OPTIONS /statuses': {
            controller: 'Options',
            model: 'status',
            action: 'collection'
        },
        'OPTIONS /statuses/:id': {
            controller: 'Options',
            model: 'status',
            action: 'instance'
        },
        'OPTIONS /statuses/first': {
            controller: 'Options',
            model: 'status',
            action: 'query'
        },
        'OPTIONS /statuses/last': {
            controller: 'Options',
            model: 'status',
            action: 'query'
        },
        'OPTIONS /statuses/count': {
            controller: 'Options',
            model: 'status',
            action: 'query'
        },

        // 'OPTIONS /statuses/:id': { blueprinst: 'update', model: 'status' },


        // Filetypes
        'DELETE /filetypes/:id': {
            controller: 'Delete',
            model: 'filetype',
            action: 'delete'
        },
        'POST /filetypes/:id/restore': {
            controller: 'Delete',
            model: 'filetype',
            action: 'restore'
        },
        'GET /filetypes/first': {
            blueprint: 'first',
            model: 'filetype',
            // policy: 'isAuthenticated'
        },
        'GET /filetypes/last': {
            blueprint: 'last',
            model: 'filetype',
            // policy: 'isAuthenticated'
        },
        'GET /filetypes/search': {
            blueprint: 'search',
            model: 'filetype',
            // policy: 'isAuthenticated'
        },
        'PATCH /filetypes/:id': {
            blueprint: 'update',
            model: 'filetype',
            // policy: 'isAuthenticated'
        },
        'HEAD /filetypes/*': {
            controller: 'Head',
            action: 'Head',
            model: 'filetype'
        },
        'HEAD /filetypes': {
            controller: 'Head',
            action: 'Head',
            model: 'filetype'
        },

        'OPTIONS /filetypes': {
            controller: 'Options',
            model: 'filetype',
            action: 'collection'
        },
        'OPTIONS /filetypes/:id': {
            controller: 'Options',
            model: 'filetype',
            action: 'instance'
        },
        'OPTIONS /filetypes/first': {
            controller: 'Options',
            model: 'filetype',
            action: 'query'
        },
        'OPTIONS /filetypes/last': {
            controller: 'Options',
            model: 'filetype',
            action: 'query'
        },
        'OPTIONS /filetypes/count': {
            controller: 'Options',
            model: 'filetype',
            action: 'query'
        },


        // Files

        'POST /files': 'File.upload',
        'GET /files/:id/download': 'File.download',

        'GET /files/:id/contents': 'File.contents',

        'GET /files/first': {
            blueprint: 'first',
            model: 'file',
            // policy: 'isAuthenticated'
        },
        'GET /files/search': {
            blueprint: 'search',
            model: 'file',
            // policy: 'isAuthenticated'
        },
        'GET /files/last': {
            blueprint: 'last',
            model: 'file',
            // policy: 'isAuthenticated'
        },
        'PATCH /files/:id': {
            blueprint: 'update',
            model: 'file',
            // policy: 'isAuthenticated'
        },
        'HEAD /files/*': {
            controller: 'Head',
            action: 'Head',
            model: 'file'
        },
        'HEAD /files': {
            controller: 'Head',
            action: 'Head',
            model: 'file'
        },

        'OPTIONS /files': {
            controller: 'Options',
            model: 'file',
            action: 'collection'
        },
        'OPTIONS /files/:id': {
            controller: 'Options',
            model: 'file',
            action: 'instance'
        },
        'OPTIONS /files/first': {
            controller: 'Options',
            model: 'file',
            action: 'query'
        },
        'OPTIONS /files/last': {
            controller: 'Options',
            model: 'file',
            action: 'query'
        },
        'OPTIONS /files/count': {
            controller: 'Options',
            model: 'file',
            action: 'query'
        },


        // Databases

        'GET /databases/first': {
            blueprint: 'first',
            model: 'database',
            // policy: 'isAuthenticated'
        },
        'GET /databases/last': {
            blueprint: 'last',
            model: 'database',
            // policy: 'isAuthenticated'
        },
        'GET /databases/search': {
            blueprint: 'search',
            model: 'database',
            // policy: 'isAuthenticated'
        },
        'PATCH /databases/:id': {
            blueprint: 'update',
            model: 'database',
            // policy: 'isAuthenticated'
        },
        'HEAD /databases/*': {
            controller: 'Head',
            action: 'Head',
            model: 'database'
        },
        'HEAD /databases': {
            controller: 'Head',
            action: 'Head',
            model: 'database'
        },

        'OPTIONS /databases': {
            controller: 'Options',
            model: 'database',
            action: 'collection'
        },
        'OPTIONS /databases/:id': {
            controller: 'Options',
            model: 'database',
            action: 'instance'
        },
        'OPTIONS /databases/first': {
            controller: 'Options',
            model: 'database',
            action: 'query'
        },
        'OPTIONS /databases/last': {
            controller: 'Options',
            model: 'database',
            action: 'query'
        },
        'OPTIONS /databases/count': {
            controller: 'Options',
            model: 'database',
            action: 'query'
        },


        // Datasets
        'GET /datasets/:id/download': 'Dataset.download',
        'GET /datasets/feed/rss': 'Dataset.feedRss',
        'GET /datasets/first': {
            blueprint: 'first',
            model: 'dataset'
                // policy: 'isAuthenticated'
        },
        'GET /datasets/last': {
            blueprint: 'last',
            model: 'dataset'
                // policy: 'isAuthenticated'
        },
        'GET /datasets/search': {
            blueprint: 'search',
            model: 'dataset'
                // policy: 'isAuthenticated'
        },
        'PATCH /datasets/:id': {
            blueprint: 'update',
            model: 'dataset'
                // policy: 'isAuthenticated'
        },
        'HEAD /datasets/*': {
            controller: 'Head',
            action: 'Head',
            model: 'dataset'
        },
        'HEAD /datasets': {
            controller: 'Head',
            action: 'Head',
            model: 'dataset'
        },

        'OPTIONS /datasets': {
            controller: 'Options',
            model: 'dataset',
            action: 'collection'
        },
        'OPTIONS /datasets/:id': {
            controller: 'Options',
            model: 'dataset',
            action: 'instance'
        },
        'OPTIONS /datasets/first': {
            controller: 'Options',
            model: 'dataset',
            action: 'query'
        },
        'OPTIONS /datasets/last': {
            controller: 'Options',
            model: 'dataset',
            action: 'query'
        },
        'OPTIONS /datasets/count': {
            controller: 'Options',
            model: 'dataset',
            action: 'query'
        },


        // Tags
        'DELETE /tags/:id': {
            controller: 'Delete',
            model: 'tag',
            action: 'delete'
        },
        'POST /tags/:id/restore': {
            controller: 'Delete',
            model: 'tag',
            action: 'restore'
        },
        'GET /tags/first': {
            blueprint: 'first',
            model: 'tag',
            // policy: 'isAuthenticated'
        },

        'GET /tags/last': {
            blueprint: 'last',
            model: 'tag',
            // policy: 'isAuthenticated'
        },
        'GET /tags/search': {
            blueprint: 'search',
            model: 'tag',
            // policy: 'isAuthenticated'
        },

        'PATCH /tags/:id': {
            blueprint: 'update',
            model: 'tag',
            // policy: 'isAuthenticated'
        },
        'HEAD /tags/*': {
            controller: 'Head',
            action: 'Head',
            model: 'tag'
        },
        'HEAD /tags': {
            controller: 'Head',
            action: 'Head',
            model: 'tag'
        },

        'OPTIONS /tags': {
            controller: 'Options',
            model: 'tag',
            action: 'collection'
        },
        'OPTIONS /tags/:id': {
            controller: 'Options',
            model: 'tag',
            action: 'instance'
        },
        'OPTIONS /tags/first': {
            controller: 'Options',
            model: 'tag',
            action: 'query'
        },
        'OPTIONS /tags/last': {
            controller: 'Options',
            model: 'tag',
            action: 'query'
        },
        'OPTIONS /tags/count': {
            controller: 'Options',
            model: 'tag',
            action: 'query'
        },

        // UpdateFrequencies

        'GET /updatefrequencies/first': {
            blueprint: 'first',
            model: 'updatefrequency'
                // policy: 'isAuthenticated'
        },
        'GET /updatefrequencies/search': {
            blueprint: 'search',
            model: 'updatefrequency'
                // policy: 'isAuthenticated'
        },
        'GET /updatefrequencies/last': {
            blueprint: 'last',
            model: 'updatefrequency'
                // policy: 'isAuthenticated'
        },

        'PATCH /updatefrequencies/:id': {
            blueprint: 'update',
            model: 'updatefrequency'
                // policy: 'isAuthenticated'
        },
        'HEAD /updatefrequencies/*': {
            controller: 'Head',
            action: 'Head',
            model: 'updatefrequency'
        },
        'HEAD /updatefrequencies': {
            controller: 'Head',
            action: 'Head',
            model: 'updatefrequency'
        },

        'OPTIONS /updatefrequencies': {
            controller: 'Options',
            model: 'updatefrequency',
            action: 'collection'
        },
        'OPTIONS /updatefrequencies/:id': {
            controller: 'Options',
            model: 'updatefrequency',
            action: 'instance'
        },
        'OPTIONS /updatefrequencies/first': {
            controller: 'Options',
            model: 'updatefrequency',
            action: 'query'
        },
        'OPTIONS /updatefrequencies/last': {
            controller: 'Options',
            model: 'updatefrequency',
            action: 'query'
        },
        'OPTIONS /updatefrequencies/count': {
            controller: 'Options',
            model: 'updatefrequency',
            action: 'query'
        },

        // Configs

        'GET /configs/first': {
            blueprint: 'first',
            model: 'config',
            // policy: 'isAuthenticated'
        },
        'GET /configs/last': {
            blueprint: 'last',
            model: 'config',
            // policy: 'isAuthenticated'
        },
        'GET /configs/search': {
            blueprint: 'search',
            model: 'config',
            // policy: 'isAuthenticated'
        },

        'PATCH /configs/:id': {
            blueprint: 'update',
            model: 'config',
            // policy: 'isAuthenticated'
        },
        'HEAD /configs/*': {
            controller: 'Head',
            action: 'Head',
            model: 'config'
        },
        'HEAD /configs': {
            controller: 'Head',
            action: 'Head',
            model: 'config'
        },

        'OPTIONS /configs': {
            controller: 'Options',
            model: 'config',
            action: 'collection'
        },
        'OPTIONS /configs/:id': {
            controller: 'Options',
            model: 'config',
            action: 'instance'
        },
        'OPTIONS /configs/first': {
            controller: 'Options',
            model: 'config',
            action: 'query'
        },
        'OPTIONS /configs/last': {
            controller: 'Options',
            model: 'config',
            action: 'query'
        },
        'OPTIONS /configs/count': {
            controller: 'Options',
            model: 'config',
            action: 'query'
        },


        // Logs

        'GET /logs/first': {
            blueprint: 'first',
            model: 'log',
            // policy: 'isAuthenticated'
        },
        'GET /logs/last': {
            blueprint: 'last',
            model: 'log',
            // policy: 'isAuthenticated'
        },
        'GET /logs/search': {
            blueprint: 'search',
            model: 'log',
            // policy: 'isAuthenticated'
        },

        'HEAD /logs/*': {
            controller: 'Head',
            action: 'Head',
            model: 'log'
        },
        'HEAD /logs': {
            controller: 'Head',
            action: 'Head',
            model: 'log'
        },

        'OPTIONS /logs': {
            controller: 'Options',
            model: 'log',
            action: 'collection'
        },
        'OPTIONS /logs/:id': {
            controller: 'Options',
            model: 'log',
            action: 'instance'
        },
        'OPTIONS /logs/first': {
            controller: 'Options',
            model: 'log',
            action: 'query'
        },
        'OPTIONS /logs/last': {
            controller: 'Options',
            model: 'log',
            action: 'query'
        },
        'OPTIONS /logs/count': {
            controller: 'Options',
            model: 'log',
            action: 'query'
        },

        // Maps

        'GET /maps/first': {
            blueprint: 'first',
            model: 'map',
            // policy: 'isAuthenticated'
        },
        'GET /maps/last': {
            blueprint: 'last',
            model: 'map',
            // policy: 'isAuthenticated'
        },
        'GET /maps/search': {
            blueprint: 'search',
            model: 'map',
            // policy: 'isAuthenticated'
        },

        'HEAD /maps/*': {
            controller: 'Head',
            action: 'Head',
            model: 'map'
        },
        'HEAD /maps': {
            controller: 'Head',
            action: 'Head',
            model: 'map'
        },

        'OPTIONS /maps': {
            controller: 'Options',
            model: 'map',
            action: 'collection'
        },
        'OPTIONS /maps/:id': {
            controller: 'Options',
            model: 'map',
            action: 'instance'
        },
        'OPTIONS /maps/first': {
            controller: 'Options',
            model: 'map',
            action: 'query'
        },
        'OPTIONS /maps/last': {
            controller: 'Options',
            model: 'map',
            action: 'query'
        },
        'OPTIONS /maps/count': {
            controller: 'Options',
            model: 'map',
            action: 'query'
        },

        // Charts

        'GET /charts/first': {
            blueprint: 'first',
            model: 'chart'
                // policy: 'isAuthenticated'
        },
        'GET /charts/last': {
            blueprint: 'last',
            model: 'chart'
                // policy: 'isAuthenticated'
        },
        'GET /charts/search': {
            blueprint: 'search',
            model: 'chart'
                // policy: 'isAuthenticated'
        },

        'HEAD /charts/*': {
            controller: 'Head',
            action: 'Head',
            model: 'chart'
        },
        'HEAD /charts': {
            controller: 'Head',
            action: 'Head',
            model: 'chart'
        },

        'OPTIONS /charts': {
            controller: 'Options',
            model: 'chart',
            action: 'collection'
        },
        'OPTIONS /charts/:id': {
            controller: 'Options',
            model: 'chart',
            action: 'instance'
        },
        'OPTIONS /charts/first': {
            controller: 'Options',
            model: 'chart',
            action: 'query'
        },
        'OPTIONS /charts/last': {
            controller: 'Options',
            model: 'chart',
            action: 'query'
        },
        'OPTIONS /charts/count': {
            controller: 'Options',
            model: 'chart',
            action: 'query'
        },

        // Views

        'GET /views/first': {
            blueprint: 'first',
            model: 'view'
                // policy: 'isAuthenticated'
        },
        'GET /views/last': {
            blueprint: 'last',
            model: 'view'
                // policy: 'isAuthenticated'
        },
        'GET /views/search': {
            blueprint: 'search',
            model: 'view'
                // policy: 'isAuthenticated'
        },

        'HEAD /views/*': {
            controller: 'Head',
            action: 'Head',
            model: 'view'
        },
        'HEAD /views': {
            controller: 'Head',
            action: 'Head',
            model: 'view'
        },

        'OPTIONS /views': {
            controller: 'Options',
            model: 'view',
            action: 'collection'
        },
        'OPTIONS /views/:id': {
            controller: 'Options',
            model: 'view',
            action: 'instance'
        },
        'OPTIONS /views/first': {
            controller: 'Options',
            model: 'view',
            action: 'query'
        },
        'OPTIONS /views/last': {
            controller: 'Options',
            model: 'view',
            action: 'query'
        },
        'OPTIONS /views/count': {
            controller: 'Options',
            model: 'view',
            action: 'query'
        },
    }
};