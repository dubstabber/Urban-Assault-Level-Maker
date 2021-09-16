import { connect } from 'react-redux';
import { toggleContextMenu } from '../../actions/menuActions';
import { addHostStation } from '../../actions/mapActions';
import { useState, useEffect, useRef, MouseEvent } from 'react';

import './ContextMenu.css';
import '../../css/host-station-icons.css';

const _ContextMenu = ({
  point,
  size,
  toggleContextMenu,
  addHostStation,
}: any) => {
  const [menuX, setMenuX] = useState(point.posX);
  const [menuY, setMenuY] = useState(point.posY);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      const rightSideX = point.posX + menuRef.current.offsetWidth;
      if (rightSideX > size.width) {
        const overflowX = rightSideX - size.width;
        setMenuX(point.posX - overflowX);
      } else {
        setMenuX(point.posX);
      }

      const bottomSideY = point.posY + menuRef.current.offsetHeight;
      if (bottomSideY > size.height) {
        const overflowY = bottomSideY - size.height;
        setMenuY(point.posY - overflowY);
      } else {
        setMenuY(point.posY);
      }
    }
  }, [point, size]);

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function addHS(id: number): void {
    toggleContextMenu(false);

    switch (id) {
      case 1:
        addHostStation(point.posX, point.posY, id, 56);
        break;
    }
    console.log(`create a host station: ${id}`);
  }

  return (
    <ul
      onClick={handleClick}
      onContextMenu={handleClick}
      ref={menuRef}
      className="contextMenu"
      style={{ top: menuY, left: menuX }}
    >
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

export const ContextMenu = connect(null, { toggleContextMenu, addHostStation })(
  _ContextMenu
);
