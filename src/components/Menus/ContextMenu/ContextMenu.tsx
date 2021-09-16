import { connect } from 'react-redux';
import { toggleContextMenu } from '../../../actions/menuActions';
import { addHostStation } from '../../../actions/mapActions';
import { useState, useEffect, useRef, MouseEvent } from 'react';
import { AddHostStationMenu } from './SubMenus/AddHostStationMenu';

import './ContextMenu.css';
import '../../../css/host-station-icons.css';

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

  return (
    <ul
      onClick={handleClick}
      onContextMenu={handleClick}
      ref={menuRef}
      className="contextMenu"
      style={{ top: menuY, left: menuX }}
    >
      <AddHostStationMenu point={point} />
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
