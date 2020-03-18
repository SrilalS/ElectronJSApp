const { app, BrowserWindow } = require('electron');
const electron = require('electron');
require('electron-reload')(__dirname);

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame : false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('main.html');
  win.setMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
