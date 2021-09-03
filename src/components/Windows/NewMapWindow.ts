import { BrowserWindow, remote } from 'electron';
import * as path from 'path';

export class NewMapWindow {
  window: BrowserWindow | null;

  constructor() {
    this.window = new remote.BrowserWindow({
      width: 300,
      height: 200,
      title: 'Create a new map',
    });
    this.window.loadFile(
      path.join(__dirname, '../../../html/NewMapWindow.html')
    );
    this.window.on('close', () => {
      this.window = null;
    });
  }
}
