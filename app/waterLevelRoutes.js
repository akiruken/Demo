//Import modules and controllers
const express = require('express');
const {viewAllWaterLevels,
    addWaterLevel,
    updateWaterLevel, 
    removeWaterLevel} = require('./controllers/waterLevelCtrl');

var router = express.Router();

router.route('/view/:borehole_id').get(viewAllWaterLevels)
    
router.route('/add/:borehole_id').post(addWaterLevel);
    
router.route('/:water_level_id').patch(updateWaterLevel)
    .delete(removeWaterLevel);


module.exports = router;