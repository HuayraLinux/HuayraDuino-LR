// Require the serialport node module
const { SerialPort, ReadlineParser } = require('serialport')
const fs = require('fs');
const projectLocator = require('./projectlocator.js');

var logProcess = null;
var log = null;

function parseINIString(data){
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
        comment: /^\s*;.*$/
    };
    var value = {};
    var lines = data.split(/[\r\n]+/);
    var section = null;
    lines.forEach(function(line){
        if(regex.comment.test(line)){
            return;
        }else if(regex.param.test(line)){
            var match = line.match(regex.param);
            if(section){
                value[section][match[1]] = match[2];
            }else{
                value[match[1]] = match[2];
            }
        }else if(regex.section.test(line)){
            var match = line.match(regex.section);
            value[match[1]] = {};
            section = match[1];
        }else if(line.length == 0 && section){
            section = null;
        };
    });
    return value;
}

module.exports.startLog = function () {
    if (logProcess === null) 
        {
        const parser = new ReadlineParser()
        const home = require('fs-jetpack').dir(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']).path()
        log = fs.openSync(home + '/huayraduino.csv', 'a')
        try {
            var iniFile = fs.readFileSync(projectLocator.getProjectRootPath() + '/ServerCompilerSettings.ini', 'utf8');
            
            var javascript_ini = parseINIString(iniFile);
            var device = javascript_ini['Arduino_IDE']['arduino_serial_port'];
       
        } 
        catch(e) {
            console.log(e);
        }

        // Open the port
        logProcess = new SerialPort({ path: device, 
            baudRate: 9600
        });

        logProcess.pipe(parser)
        
        // Read the port data
        logProcess.on("open", function () {
            parser.on('data', (data) => {       
                console.log(data)
                fs.writeSync(log, data + '\n')
            });
        });
    }
}

module.exports.stopLog = function() {
    if (logProcess !== null) {
        logProcess.close();
        logProcess.destroy();
        logProcess = null;
        if (log !== null)
        {
            fs.closeSync(log)
            log = null;
        }
    }
}