var water_level_retrive_statement = "SELECT * FROM water_level_recording";
var water_level_insert_statement = "INSERT INTO water_level_recording SET ?";
var water_level_find_statement = "SELECT * FROM water_level_recording WHERE WATER_LEVEL_ID = ?";
var water_level_update_statement = "UPDATE water_level_recording SET CAPTURE_DATE=?, WATER_READING=? WHERE BOREHOLE_ID =?";

function getAll(){

}

function add(newWaterReading, db){
    db.query(water_level_insert_statement,newWaterReading,(err,results,fields)=>{
        if(err) 
        {
            db.rollback(function(){
                console.error(error);
                throw err;
            }); 
        }
        console.log(results);
    });
}

function update(id){

}

function remove(id){
   
}

module.exports  = {
    viewAllWaterLevels: getAll,
    addWaterLevel: add,
    updateWaterLevel: update,
    removeWaterLevel: remove
}