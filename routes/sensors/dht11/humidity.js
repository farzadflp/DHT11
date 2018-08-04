var express = require('express');
var router = express.Router();
var dhtSensor = require('./dht');

router.get('/', function (req, resp) {
    var humidity = dhtSensor.readout.humidity.toFixed(2);
    resp.send({
        status: 'success',
        data: {
            humidity: humidity
        }
    }).catch(error => {
        res.send({
            status: 'error',
            error: err
        });
    });
});

module.exports = router;
