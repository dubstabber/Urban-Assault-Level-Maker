import { ipcRenderer } from 'electron';
import { Menu } from './Menu';
import { NewMapWindow } from '../Windows/NewMapWindow';

export class FileMenu implements Menu {
  private newMapMenu: HTMLElement | undefined | null;
  private openMapMenu: HTMLElement | undefined | null;

  private exitMenu: HTMLElement | undefined | null;

  listen = (): void => {
    this.newMapMenu = document.getElementById('newMap');
    if (this.newMapMenu) {
      this.newMapMenu.addEventListener('click', this.newMap);
    } else {
      console.log('New Map Menu could not be initialized');
    }

    this.exitMenu = document.getElementById('exit');
    if (this.exitMenu) {
      this.exitMenu.addEventListener('click', this.exit);
    } else {
      console.log('Exit Menu could not be initialized');
    }
  };
  newMap(): void {
    new NewMapWindow();
  }
  exit = (): void => {
    ipcRenderer.invoke('quit-app');
  };
}
