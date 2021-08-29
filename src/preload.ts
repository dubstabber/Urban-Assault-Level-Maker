import { FileMenu } from './components/Menus/FileMenu';

window.addEventListener('DOMContentLoaded', () => {
  menus.fileMenu.listen();
});

export const menus = {
  fileMenu: new FileMenu(),
};
