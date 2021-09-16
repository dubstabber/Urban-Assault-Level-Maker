import { connect } from 'react-redux';
import { toggleContextMenu } from '../../../../actions/menuActions';
import { addHostStation } from '../../../../actions/mapActions';
import { useState, useRef } from 'react';

const _AddHostStationMenu = ({
  point,
  mapSize,
  toggleContextMenu,
  addHostStation,
}: any) => {
  const [positionX, setPositionX] = useState('100%');
  const menuRef = useRef<HTMLUListElement>(null);

  function addHS(id: number): void {
    toggleContextMenu(false);

    switch (id) {
      case 1:
        addHostStation(point.spawnX, point.spawnY, id, 56);
        break;
      case 2:
        addHostStation(point.spawnX, point.spawnY, id, 61);
        break;
      case 3:
        addHostStation(point.spawnX, point.spawnY, id, 58);
        break;
      case 4:
        addHostStation(point.spawnX, point.spawnY, id, 60);
        break;
      case 5:
        addHostStation(point.spawnX, point.spawnY, id, 62);
        break;
      case 6:
        addHostStation(point.spawnX, point.spawnY, id, 59);
        break;
      case 7:
        addHostStation(point.spawnX, point.spawnY, id, 132);
        break;
    }
  }

  function handleHover(e: any) {
    if (menuRef.current) {
      const rightSideX =
        // console.log(menuRef.current.offsetWidth);
        console.log(menuRef.current);
    }
  }

  return (
    <li onMouseEnter={handleHover} className="menu__items">
      Add host station here
      <ul ref={menuRef} style={{ left: positionX }} className="menu__submenu">
        <li className="menu__item" onClick={() => addHS(1)}>
          <i className="host-station-icon resistance-icon"></i>Resistance
        </li>
        <li className="menu__item" onClick={() => addHS(6)}>
          <i className="host-station-icon ghorkov-icon"></i>Ghorkov
        </li>
        <li className="menu__item" onClick={() => addHS(4)}>
          <i className="host-station-icon taerkasten-icon"></i>Taerkasten
        </li>
        <li className="menu__item" onClick={() => addHS(3)}>
          <i className="host-station-icon mykonian-icon"></i>Mykonian
        </li>
        <li className="menu__item" onClick={() => addHS(2)}>
          <i className="host-station-icon sulgogar-icon"></i>Sulgogar
        </li>
        <li className="menu__item" onClick={() => addHS(5)}>
          <i className="host-station-icon black-sect-icon"></i>Black Sect
        </li>
        <li className="menu__item" onClick={() => addHS(7)}>
          <i className="host-station-icon training-icon"></i>Training host
          station
        </li>
      </ul>
    </li>
  );
};

export const AddHostStationMenu = connect(null, {
  toggleContextMenu,
  addHostStation,
})(_AddHostStationMenu);
