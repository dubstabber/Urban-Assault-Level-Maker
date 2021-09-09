import { MouseEvent } from 'react';

import './ContextMenu.css';

const ContentMenu = ({ posX, posY }: any) => {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    console.log('clicked on context menu');
    e.stopPropagation();
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      className="menu contentMenu"
      style={{ top: posY, left: posX }}
    >
      Context Menu
    </div>
  );
};

export default ContentMenu;
