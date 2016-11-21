exports.up = function(knex, Promise) {
    return Promise.all([
            knex.schema.alterTable('category', function(t) {
                t.unique('slug');
            }),
            knex.schema.alterTable('organization', function(t) {
                t.unique('slug');
            }),
            knex.schema.alterTable('dataset', function(t) {
                t.unique('slug');
            }), knex.schema.alterTable('file', function(t) {
                t.unique('fileName');
            }), knex.schema.alterTable('filetype', function(t) {
                t.unique('slug');
            }), knex.schema.alterTable('tag', function(t) {
                t.unique('slug');
            })
        ])
};

exports.down = function(knex, Promise) {

};
