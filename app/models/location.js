var location_retrive_statement = "SELECT * FROM location";
var location_insert_statement = "INSERT INTO location SET ?";
var location_find_statement = "SELECT * FROM location WHERE LOCATION_NUM = ?";
var location_update_statement = "UPDATE location SET LATITUDE=?, LONGITUDE=?, ELEVATION= ? WHERE LOCATION_NUM=?";

function get(id){

}

function add(location,borehole, db, insertBorhole){
    var locationNumber;
    db.query(location_insert_statement,location,(err,results)=>{
        if(err) 
        {
            db.rollback(function(){
                console.error(error);
                throw err;
            }); 
        }

        console.log("\n Finished inserting Location: " + JSON.stringify(results));
        locationNumber = results.insertId;
        console.log("\n Finished inserting Location " + locationNumber);

        insertBorhole(locationNumber,borehole,db);
    });
}

function update(id){

}

module.exports  = {
    viewLocation: get,
    addLocation: add,
    updateLocation: update
}