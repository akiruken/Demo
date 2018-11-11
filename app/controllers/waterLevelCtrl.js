var BoreholeWaterLevel = require('./models/waterLevel');

//GET /api/water-level/view/:borehole_id
function view(req,res){

}

//POST /api/water-level/create
function create(req,res,next){
    
}

//UPDATE /api/water-level/update/:water_level_id
function update(req,res){
    
}

//DELET /api/water-level/delete/:water_level_id
function remove(req,res){
    
}

module.exports = {
    viewAllWaterLevels: view,
    addWaterLevel: create,
    updateWaterLevel: update,
    removeWaterLevel: remove
}
