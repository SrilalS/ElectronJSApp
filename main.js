const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow} = electron;

let mainWindow;


app.on('ready', function(){
    mainWindow = new BrowserWindow({
        frame:false,
        webPreferences : {
            preload : path.join(__dirname,'preload.js'),
            NodeIntergration : true
        }
    
    });
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,'main.html'),
        protocol : 'file',
        slashes : true
    }))

    
})