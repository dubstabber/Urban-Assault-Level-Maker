import { connect } from 'react-redux';
import { toggleContextMenu } from '../../../../actions/menuActions';
import { addHostStation } from '../../../../actions/mapActions';
import React from 'react';

const _AddHostStationMenu = ({
  point,
  toggleContextMenu,
  addHostStation,
}: any) => {
  function addHS(id: number): void {
    toggleContextMenu(false);

    switch (id) {
      case 1:
        addHostStation(point.posX, point.posY, id, 56);
        break;
      case 2:
        addHostStation(point.posX, point.posY, id, 61);
        break;
      case 3:
        addHostStation(point.posX, point.posY, id, 58);
        break;
      case 4:
        addHostStation(point.posX, point.posY, id, 60);
        break;
      case 5:
        addHostStation(point.posX, point.posY, id, 62);
        break;
      case 6:
        addHostStation(point.posX, point.posY, id, 59);
        break;
      case 7:
        addHostStation(point.posX, point.posY, id, 132);
        break;
    }
  }
  return (
    <li className="menu__items">
      Add host station here
      <ul className="menu__submenu">
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
