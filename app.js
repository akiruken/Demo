//Importing required modules and routes
const express = require('express');
const bodyParser = require('body-parser');
const boreholeRoutes = require('./app/boreholeRoutes');
const waterLevelRoutes = require('./app/waterLevelRoutes');

//////////////////////////Server Setup//////////////////////////
const PORT = process.env.PORT || 8080;
const app = express();

//Setup body parser and url encoder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Setup routes
app.use('/api/borehole', boreholeRoutes);
app.use('/api/water-levels',waterLevelRoutes);

//Start server
app.listen(PORT, () =>{
    console.log('Application server started and listening on port=',PORT);
})