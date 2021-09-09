import { MouseEvent } from 'react';

import './ContextMenu.css';

const ContextMenu = ({ posX, posY }: any) => {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <ul
      onClick={handleClick}
      onContextMenu={handleClick}
      className="menu contextMenu"
      style={{ top: posY, left: posX }}
    >
      <li className="menu__item">Add host station here</li>
      <li>Add squad here</li>
      <li>Set sector faction to</li>
      <li>Set height here</li>
      <li>Add special building here</li>
      <li>Set building here</li>
      <li>Add sector item here</li>
      <li>Clear this sector</li>
    </ul>
  );
};

export default ContextMenu;
