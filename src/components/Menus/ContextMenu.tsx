import { MouseEvent } from 'react';

import './ContextMenu.css';
import '../../css/host-station-icons.css';

const ContextMenu = ({ posX, posY }: any) => {
  function handleClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function addHostStation(id: number): void {
    console.log(`create a host station: ${id}`);
  }

  return (
    <ul
      onClick={handleClick}
      onContextMenu={handleClick}
      className="contextMenu"
      style={{ top: posY, left: posX }}
    >
      <li className="menu__items">
        Add host station here
        <ul className="menu__submenu">
          <li className="menu__item" onClick={() => addHostStation(1)}>
            <i className="host-station-icon resistance-icon"></i>Resistance
          </li>
          <li className="menu__item" onClick={() => addHostStation(6)}>
            <i className="host-station-icon ghorkov-icon"></i>Ghorkov
          </li>
          <li className="menu__item" onClick={() => addHostStation(4)}>
            <i className="host-station-icon taerkasten-icon"></i>Taerkasten
          </li>
          <li className="menu__item" onClick={() => addHostStation(3)}>
            <i className="host-station-icon mykonian-icon"></i>Mykonian
          </li>
          <li className="menu__item" onClick={() => addHostStation(2)}>
            <i className="host-station-icon sulgogar-icon"></i>Sulgogar
          </li>
          <li className="menu__item" onClick={() => addHostStation(5)}>
            <i className="host-station-icon black-sect-icon"></i>Black Sect
          </li>
          <li className="menu__item" onClick={() => addHostStation(7)}>
            <i className="host-station-icon training-icon"></i>Training host
            station
          </li>
        </ul>
      </li>
      <li className="menu__items">Add squad here</li>
      <li className="menu__item">Set sector faction to</li>
      <li className="menu__item">Set height here</li>
      <li className="menu__items">Add special building here</li>
      <li className="menu__item">Set building here</li>
      <li className="menu__items">Add sector item here</li>
      <li className="menu__item">Clear this sector</li>
    </ul>
  );
};

export default ContextMenu;
