const db = require('../../config/database');

module.exports  = db.extend({
    tableName: "water_level_recording"
});
