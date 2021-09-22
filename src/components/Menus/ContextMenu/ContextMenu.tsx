import { connect } from 'react-redux';
import { toggleContextMenu } from '../../../actions/menuActions';
import { addHostStation } from '../../../actions/mapActions';
import { useState, useEffect, useRef, MouseEvent } from 'react';
import { AddHostStationMenu } from './SubMenus/AddHostStationMenu';

import './ContextMenu.css';
import '../../../css/host-station-icons.css';
import { StoreState } from '../../../reducers';

const _ContextMenu = ({
  toggleContextMenu,
  menu: {
    clickedX,
    clickedY,
    clickedWindowX,
    clickedWindowY,
    screenWidth,
    screenHeight,
  },
}: any) => {
  const [menuX, setMenuX] = useState(clickedX);
  const [menuY, setMenuY] = useState(clickedY);
  const [rightSide, setRightSide] = useState();
  const [bottomSide, setBottomSide] = useState();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setRightSide(clickedWindowX + menuRef.current.offsetWidth);
      setBottomSide(clickedWindowY + menuRef.current.offsetHeight);
    }
  }, [menuRef, clickedWindowX, clickedWindowY]);

  useEffect(() => {
    if (menuRef.current && rightSide && bottomSide) {
      const scrollOffset = 20;
      if (rightSide > screenWidth) {
        const overflowX = rightSide - screenWidth + scrollOffset;
        setMenuX(clickedX - overflowX);
      } else {
        setMenuX(clickedX);
      }

      if (bottomSide > screenHeight) {
        const overflowY = bottomSide - screenHeight + scrollOffset;
        setMenuY(clickedY - overflowY);
      } else {
        setMenuY(clickedY);
      }
    }
  }, [clickedX, clickedY, rightSide, bottomSide, screenWidth, screenHeight]);

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
      {menuRef.current && (
        <AddHostStationMenu
          point={{
            rightCorner: rightSide,
            bottomCorner: bottomSide,
          }}
        />
      )}
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

const mapStateToProps = (state: StoreState) => ({
  menu: state.menu,
});

export const ContextMenu = connect(mapStateToProps, {
  toggleContextMenu,
  addHostStation,
})(_ContextMenu);
