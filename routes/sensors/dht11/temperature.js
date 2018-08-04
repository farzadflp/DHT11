var express = require('express');
var router = express.Router();
var dhtSensor = require('./dht');

router.get('/', function (req, resp) {
    var temp = dhtSensor.readout.temperature.toFixed(2);
    resp.send({
        status: 'success',
        data: {
            temperature: "temp"
        }
    }).catch(error => {
        res.send({
            status: 'error',
            error: err
        });
    });
});

module.exports = router;
