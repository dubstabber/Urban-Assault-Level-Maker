import { connect } from 'react-redux';
import { toggleMenu, hoverMenu, disableMenu } from '../../actions/menuActions';
import { toggleNewMapWindow } from '../../actions/windowActions';
import { StoreState } from '../../reducers';

const _FileMenu = ({
  id,
  menu: { activatedMenu, hoverMenuId },
  toggleMenu,
  disableMenu,
  hoverMenu,
  toggleNewMapWindow,
}: any) => {
  return (
    <>
      <div className="menu__container">
        <span
          onClick={toggleMenu}
          onMouseOver={() => hoverMenu(id)}
          className="menu__title"
        >
          File
        </span>
        <ul
          className={
            activatedMenu && id === hoverMenuId
              ? 'menu__list--enabled'
              : 'menu__list--disabled'
          }
        >
          <li
            onClick={() => {
              toggleNewMapWindow(true);
              disableMenu();
            }}
            className="menu__item"
          >
            New map
          </li>
          <li className="menu__item">Open map</li>
          <li className="menu__item">Save</li>
          <li className="menu__item">Save As...</li>
          <li className="menu__item">Close current map</li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  menu: state.menu,
});

export const FileMenu = connect(mapStateToProps, {
  toggleMenu,
  disableMenu,
  hoverMenu,
  toggleNewMapWindow,
})(_FileMenu);
