/**
 * @author    carlosperate
 * @copyright 2015 carlosperate https://github.com/carlosperate
 * @license   Licensed under the The MIT License (MIT), a copy can be found in
 *            the electron project directory LICENSE file.
 *
 * @fileoverview Electron entry point continues here. Creates windows and
 *               handles system events.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const fs = require('fs')
const { ipcMain } = require("electron");

const server = require('./electron/servermgr.js');
const projectLocator = require('./electron/projectlocator.js');
const path = require('path')
const jetpack = require('fs-jetpack');
const packageData = require('fs-jetpack').cwd(app.getAppPath()).read('package.json', 'json');
const saveLog = require('./electron/serial_monitor');
const serialPort = require('serialport');

const tag = '[ArdublocklyElec] ';

// Global reference of the window object must be maintain, or the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
//var logWindow = null;

// Set up the app data directory within the Ardublockly home directory
(function setAppData() {
    var HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']
    var ardLib = ''
    console.log('HOME ', HOME)
    var appDataPath = jetpack.dir(HOME).cwd('.hdlr-appdata')
    console.log('appDataPath ', appDataPath.path())
    jetpack.dirAsync(HOME + '/Arduino')
    .then(jetpack.dirAsync(HOME + '/Arduino/libraries'))
    .then(jetpack.copyAsync('/usr/lib/huayra-duino-lr/resources/app/arduino-libraries', HOME + '/Arduino/libraries', 
      { overwrite: (srcInspectData, destInspectData) => {
          return srcInspectData.modifyTime > destInspectData.modifyTime;
        }}))

    jetpack.dirAsync(HOME+'/Ejemplos/huayra-duino-lr')
    .then(jetpack.copyAsync('/usr/lib/huayra-duino-lr/resources/app/examples', HOME+'/Ejemplos/huayra-duino-lr',       
    { overwrite: (srcInspectData, destInspectData) => {
      return srcInspectData.modifyTime > destInspectData.modifyTime;
    }}))

    app.setPath('appData', appDataPath.path());
    app.setPath('userData', appDataPath.path());
    app.setPath('cache', appDataPath.path('GenCache'));
    app.setPath('userCache', appDataPath.path('AppCache'));
    app.setPath('temp', appDataPath.path('temp'));
})();

// Ensure this is a single instance application
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
    
};

function setMainMenu() {
  const template = [
    {
      label: 'Obtener Datos',
      submenu: [
        {
          label: 'Activar Log de Puerto Serie',
          click() {
            saveLog.startLog();
          }
        },
        {
            label: 'Detener Log de Puerto Serie',
            click() {
              saveLog.stopLog();
            }
          }
        ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}


// Electron application entry point
app.on('ready', function() {
    server.startServer();
    mainWindow = new BrowserWindow({width: 1000, height: 700, 
        webPreferences: {
            nodeIntegration: false, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            preload: path.join(__dirname, "preload.js") // use a preload script
          }})
    mainWindow.menuBarVisible = false
    mainWindow.type = 'desktop'
    mainWindow.title = 'HuayraDuino'
    mainWindow.minWidth = 530
    mainWindow.minHeight = 740
    mainWindow.resizable = true 
    mainWindow.icon = path.join(__dirname, './favicon.png')
    //mainWindow.webContents.session.clearCache()
    //setMainMenu();
 
    mainWindow.webContents.on('did-fail-load',
        function(event, errorCode, errorDescription) {
            console.warn(tag + 'Page failed to load (' + errorCode + '). The ' +
                'server is probably not yet running. Trying again in 200 ms.');
            setTimeout(function() {
                mainWindow.webContents.reload();
            }, 150);
        }
    );

    mainWindow.webContents.on('did-finish-load', function() {      
        mainWindow.show();
    });

    mainWindow.on('close', function() {
        mainWindow = null;
    });

    /*
    logWindow = new BrowserWindow({width: 400, height: 500, webPreferences: { nodeIntegration: true } }) 
    logWindow.menuBarVisible = false
    logWindow.type = 'desktop'
    logWindow.title = 'log Serial Port'
    logWindow.minWidth = 330
    logWindow.minHeight = 440
    logWindow.resizable = true 

    logWindow.webContents.on('did-finish-load', function() {      
        logWindow.show();
    });

    logWindow.on('close', function() {
       logWindow = null;
    });
    
    logWindow.loadURL('file://' + path.join(__dirname, 'log.html'));
    saveLog.startLog(logWindow);
*/
    
    // Set the download directory to the home folder
    mainWindow.webContents.session.setDownloadPath(
        process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']);
    mainWindow.loadURL('http://localhost:8000/ardublockly');
});

app.on('window-all-closed', function() {
    server.stopServer();
    saveLog.stopLog();
    app.quit();
});

ipcMain.on("toMain", (event, args) => {
    //var dataLog = '';
    //console.log(args)
    if( args == true)
    {
      saveLog.startLog(mainWindow);
      //console.log('start logging')
    }
    else{
      saveLog.stopLog();
      //console.log('stop logging')
    }
    /*
    fs.readFile("preload.js", (error, data) => {
      // Do something with file contents
      
      // Send result back to renderer process
      console.log('pase por el preload')
      mainWindow.webContents.send("fromMain", dataLog);
    });
    */
  });