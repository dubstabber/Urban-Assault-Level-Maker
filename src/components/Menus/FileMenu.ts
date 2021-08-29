import { App, Menu } from 'electron';

export class FileMenu {
  menu: Menu;

  constructor(private app: App) {
    this.menu = Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          { label: 'New map' },
          { type: 'separator' },
          { label: 'Open Map' },
          { type: 'separator' },
          { label: 'Save', accelerator: 'CmdOrCtrl+S' },
          { label: 'Save As...' },
          { type: 'separator' },
          { label: 'Close current map' },
          { type: 'separator' },
          {
            label: 'Exit',
            click: this.exit,
          },
        ],
      },
    ]);
    Menu.setApplicationMenu(this.menu);
  }
  // newMap(): void {}
  exit = (): void => {
    this.app.quit();
  };
}
