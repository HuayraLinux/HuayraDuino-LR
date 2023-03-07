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

const server = require('./electron/servermgr.js');
const projectLocator = require('./electron/projectlocator.js');
const path = require('path')
const packageData = require('fs-jetpack').cwd(app.getAppPath()).read('package.json', 'json');

const tag = '[ArdublocklyElec] ';

// Global reference of the window object must be maintain, or the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Set up the app data directory within the Ardublockly root directory
(function setAppData() {
    var appDataPath = projectLocator.getExecDirJetpack().cwd('appdata');
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

// Electron application entry point
app.on('ready', function() {
    server.startServer();
    mainWindow = new BrowserWindow({width: 1000, height: 680}) 
    mainWindow.menuBarVisible = false
    mainWindow.type = 'desktop'
    mainWindow.title = 'HuayraDuino'
    mainWindow.minWidth = 530
    mainWindow.minHeight = 740
    mainWindow.resizable = true 
    mainWindow.icon = path.join(__dirname, './favicon.png')
    //mainWindow.webContents.session.clearCache()
     
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

    // Set the download directory to the home folder
    mainWindow.webContents.session.setDownloadPath(
        process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']);
    mainWindow.loadURL('http://localhost:8000/ardublockly');
});

app.on('window-all-closed', function() {
    server.stopServer();
    app.quit();
});

