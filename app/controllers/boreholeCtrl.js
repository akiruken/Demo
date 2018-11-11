//Import all models
var Borehole = require('../models/borehole');


//GET /api/borehole/view
function view(req,res){
    var boreholeRecords = Borehole.viewAllBoreholes();
    res.status(200).send(boreholeRecords);
}

//POST /api/borehole/create
function create(req,res,next){
    var borehole = req.body;

    var success = Borehole.addNewBorehole(borehole);

    if(success)
    {
        res.status(201).send(success);
    }
    else
    {
        res.status(500).send("Server Error - Failed to add borehole");
    }
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
