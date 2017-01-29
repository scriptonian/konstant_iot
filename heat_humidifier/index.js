var sensorLib = require('node-dht-sensor');

sensorLib.initialize(22, 12); //#A
var interval = setInterval(function () { //#B
  read();
}, 2000);

function read() {
  var readout = sensorLib.read(); //#C
  console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + //#D
    'humidity: ' + readout.humidity.toFixed(2) + '%');
};

process.on('SIGINT', function () {
  clearInterval(interval);
  console.log('Bye, bye!');
  process.exit();
});
