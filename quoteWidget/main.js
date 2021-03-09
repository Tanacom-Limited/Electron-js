 const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')


let win;

function createWindow() {

  win = new BrowserWindow({
    title: ' Daily Quotes ',
    height: 250,
    width: 500,
    // frame: false,
    // show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    } 
  }

  );

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.once('ready-to-show', () => {
    win.show();
  });

  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
