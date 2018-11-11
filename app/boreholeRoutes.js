//Import modules and controllers
const express = require('express');
const {viewAllBoreholes,
    addNewBorehole,
    removeBorehole, 
    updateBorehole} = require('./controllers/boreholeCtrl');

var router = express.Router();

router.route('/view').get(viewAllBoreholes)

router.route('/create').post(addNewBorehole);

router.route('/:borehole_id').patch(updateBorehole)
    .delete(removeBorehole);


module.exports = router;