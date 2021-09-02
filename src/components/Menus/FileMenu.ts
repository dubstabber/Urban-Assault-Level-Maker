import { ipcRenderer } from 'electron';

export class FileMenu {
  private newMapMenu: HTMLElement;
  private openMapMenu: HTMLElement;

  private exitMenu: HTMLElement;

  listen = (): void => {
    this.exitMenu = document.getElementById('exit');
    this.exitMenu.addEventListener('click', this.exit);
  };
  // newMap(): void {}
  exit = (): void => {
    ipcRenderer.invoke('quit-app');
  };
}
