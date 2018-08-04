var sensorLib = require('node-dht-sensor');
var router = express.Router();
var dhtSensor = require('./dht');
sensorLib.initialize(11, 12);

router.get('/', function (req, resp) {
    var humidity = dhtSensor.readout.humidity.toFixed(2);
    resp.send({
        status: 'success',
        data: {
            temperature: humidity
        }
    }).catch(error => {
        res.send({
            status: 'error',
            error: err
        });
    });
});

module.exports = router;
