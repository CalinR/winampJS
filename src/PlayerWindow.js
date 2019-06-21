const { BrowserWindow } = require('electron');
const { app } = require('electron');

class PlayerWindow {
  constructor() {
    this.window = new BrowserWindow({
      width: 275,
      height: 116,
      webPreferences: {
        nodeIntegration: true,
      },
      frame: false,
      resizable: false,
      hasShadow: false,
    });

    this.window.webContents.openDevTools();
    this.window.loadFile('player.html');
    this.window.on('closed', this.closeWindow);
  }

  closeWindow() {
    this.window = null;
    app.quit();
  }
}

module.exports = PlayerWindow;
