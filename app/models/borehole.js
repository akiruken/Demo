const connection = require('../../config/database');
const BoreholeLocation = require('../models/location');
const BoreholeWaterLevel = require('../models/waterLevel');

///////////////////////Query Statements//////////////////////////
var borehole_update_statement = "UPDATE borehole SET NAME=?, TYPE=?, LOCATION_NUM=?, IS_ACTIVE=?, WHERE BOREHOLE_ID=?";
var borehole_insert_statement = "INSERT INTO borehole SET ?";
var borehole_find_statement = "SELECT * FROM borehole WHERE BOREHOLE_ID = ?";
var boreholes_retrive_statement = "SELECT * FROM borehole";

var db = connection.database;
connection.connect();

//////////////////Function for retrieving all////////////////////////////////
function getAll(){
   db.query(boreholes_retrive_statement,(err,results,fields)=>{
        if(err)
        {
            console.log(err);
            connection.end();
        }
        console.log('borholes: '+ JSON.stringify(results));

        return results;
    });
}

//////////////////Function for adding new////////////////////////////////
function add(newBorehole){
    db.beginTransaction((err)=>{
        if(err){throw err}

        try {
            //insert borehole location first
            var newLocation = {
                LATITUDE: newBorehole.location.latitude,
                LONGITUDE: newBorehole.location.longitude,
                ELEVATION: newBorehole.location.elevation
            };
    
            BoreholeLocation.addLocation(newLocation, newBorehole,db, insertBorhole);
            
            db.commit();
        } catch (error) {
            db.rollback(function(){
                console.error(error);
            return false;
            });
        }
    }); 

    return true;
}

function update(updatedBorehole){
    
}

function remove(id){
    
}

function insertBorhole(locationNum,newBorehole,db)
{
    //Insert first borehole
    var borehole = {
        NAME: newBorehole.name,
        TYPE: newBorehole.type,
        LOCATION_NUM: locationNum,
        IS_ACTIVE: 1
    };

    console.log("\n Borehole: " + JSON.stringify(borehole));

    var boreholeId;

    var query = db.query(borehole_insert_statement, borehole, 
                        function(err,results){
        if(err) 
        {
            db.rollback(function(){
                console.error(error);
                throw err;
            }); 
        }
        console.log("\n" + query.sql);
        console.log("\n" + results);

        boreholeId = results.insertId;

        console.log("\n New BoreholeId=" + boreholeId);
    
     

        //Insert first water level reading
        var firstWaterReading = {
            CAPTURE_DATE: newBorehole.waterLevel.date,
            LEVEL_READING: newBorehole.waterLevel.reading,
            BOREHOLE_ID: boreholeId
        };

        BoreholeWaterLevel.addWaterLevel(firstWaterReading,db); 
    });
}


module.exports  = {
    viewAllBoreholes: getAll,
    addNewBorehole: add,
    updateBorehole: update,
    removeBorehole: remove
}