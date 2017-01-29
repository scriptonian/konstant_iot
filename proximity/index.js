var gpio = require("pi-gpio");

pin = 11;

function readProximity() {
  gpio.open(pin, "input", function (err) { //#A
    gpio.read(pin, function (err, value) { //#B
      if (err) exit(err);
      console.log(value ? 'there is some one!' : 'not anymore!'); //#C
      readProximity();
    });
  });
}

function exit(err) {
  gpio.close(pin);
  if (err) console.log('An error occurred: ' + err);
  console.log('Bye, bye!')
  process.exit();
}
process.on('SIGINT', exit);

readProximity();

/*var Gpio = require('onoff').Gpio,
  sensor = new Gpio(17, 'in', 'both');    //#A

console.log('yo');
sensor.watch(function (err, value) { //#B
  console.log('watching...');
  if (err) exit(err);
  console.log(value ? 'there is someone!' : 'not anymore!');
});

function exit(err) {
  if (err) console.log('An error occurred: ' + err);
  sensor.unexport();
  console.log('Bye, bye!')
  process.exit();
}
process.on('SIGINT', exit);
*/
