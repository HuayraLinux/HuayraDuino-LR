const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow (url) {
    window = new BrowserWindow({width: 1000, height: 680}) 
    window.menuBarVisible = false
    window.type = 'desktop'
    window.title = 'HuayraDuino'
    window.minWidth = 530
    window.minHeight = 740
    window.resizable = true 
    window.icon = path.join(__dirname, './favicon.png')
    window.webContents.session.clearCache()
    window.loadURL(url)
  }

  function doCreateWindow () {
    var pathPython = 'resources/app/start.py'
    if( process.env.ENV == 'dev')
      pathPython = './start.py'
    const findKey = "URL-Browser: "
    var python = require('child_process').spawn('python', [pathPython]);
    python.stdout.on('data',function(data){
	    console.log("data: ",data.toString('utf8'));
      message = data.toString('utf8');
      if (message.search(findKey) != -1 )
      {
        let findURL = message.slice(message.indexOf(findKey)+findKey.length)
        findURL = findURL.slice(0,findURL.search('##'))
        if( findURL )
        {
        createWindow(findURL);
        }
      }
    });
 }


app.on( 'ready', doCreateWindow)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

