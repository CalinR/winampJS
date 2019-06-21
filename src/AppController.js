const AdmZip = require('adm-zip');
const path = require('path');
const PlayerWindow = require('./PlayerWindow');

class AppController {
  constructor() {
    this.playerWindow = null;
    this.activeSkin = 'default';
  }

  init() {
    this.loadSkin();

    if (!this.playerWindow) {
      this.playerWindow = new PlayerWindow();
    }
  }

  loadSkin() {
    const filePath = path.join(__dirname, `../skins/${this.activeSkin}.wsz`);
    const extractPath = path.join(__dirname, '../tmp/skin');

    try {
      const zip = new AdmZip(filePath);
      zip.extractEntryTo(`${this.activeSkin}/`, extractPath, false, true);
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = AppController;
