//Import all models
var Borehole = require('./models/borehole');
var BoreholeLocation = require('./models/location');
var BoreholeWaterLevel = require('./models/waterLevel');

//GET /api/borehole/view
function view(req,res){

}

//POST /api/borehole/create
function create(req,res,next){
    
}

//UPDATE /api/borehole/update/:borehole_id
function update(req,res){
    
}

//DELET /api/borehole/delete/:borehole_id
function remove(req,res){
    
}

module.exports = {
    viewAllBoreholes: view,
    addNewBorehole: create,
    updateBorehole: update,
    removeBorehole: remove
}
