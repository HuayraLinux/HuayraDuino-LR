// Require the serialport node module
const { SerialPort, ReadlineParser } = require('serialport')
const parser = new ReadlineParser()

const fs = require('fs');
const { AsyncLocalStorage } = require('async_hooks');

//const writeStream = fs.createWriteStream( "./out.csv", { encoding: "utf8"} );

var log = fs.openSync('test.log', 'w')

// Open the port
var port = new SerialPort({ path: "/dev/ttyACM0", 
    baudRate: 9600
});

port.pipe(parser)
// Read the port data
var count = 0;
port.on("open", function () {
    console.log('open');    
    //parser.on('data', console.log)
    parser.on('data', (data) => {
        console.log(data)
        fs.writeSync(log, data.toString())
        
        bueno no se por qué no escribe el archivo pero la idea esta por aca

        count += 1;
        if (count > 10 )
        {
            fs.closeSync(log);
            return
        }
        
    });
});


