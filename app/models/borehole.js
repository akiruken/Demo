const db = require('../../config/database');

module.exports  = db.extend({
    tableName: "borehole"
});
