import { App, Menu } from 'electron';

export class FileMenu {
  menu: Menu;

  constructor(private app: App) {
    this.menu = Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          { label: 'New map' },
          { label: 'Open Map' },
          { label: 'Save' },
          { label: 'Save As...' },
          { label: 'Close current map' },
          {
            label: 'Exit',
            click() {
              app.quit();
            },
          },
        ],
      },
    ]);
    Menu.setApplicationMenu(this.menu);
  }
}
