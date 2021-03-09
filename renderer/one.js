console.log('From Renderer One is working');

const BrowserWindow = require('electron').remote.BrowserWindow;

const path = require('path')

const url = require('url')

const newWindowBtn = document.getElementById('openNewWindow');

newWindowBtn.addEventListener('click', function (event) {

    let winThree = new BrowserWindow({ width: 600, height: 400 ,


        
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    
    
    });

    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file:',
        slashes: true
    }));

    winThree.webContents.openDevTools();


});