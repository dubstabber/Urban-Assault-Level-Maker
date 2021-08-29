import { app, BrowserWindow, Menu } from 'electron';
import { FileMenu } from './components/Menus/FileMenu';
import * as path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '../resources/img/icon.png'),
  });
  mainWindow.loadFile(path.join(__dirname, '../index.html'));
  const fileM = new FileMenu(app);
  mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
