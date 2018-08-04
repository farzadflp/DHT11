var sensorLib = require('node-dht-sensor');

sensorLib.initialize(11, 12);
var readout = sensorLib.read();

module.exports = readout;
