import { connect } from 'react-redux';
import { toggleMenu, hoverMenu } from '../../actions/menuActions';
import { StoreState } from '../../reducers';

const _ViewMenu = ({
  id,
  menu: { activatedMenu, hoverMenuId },
  toggleMenu,
  hoverMenu,
}: any) => {
  return (
    <>
      <div className="menu__container">
        <span
          onClick={toggleMenu}
          onMouseOver={() => hoverMenu(id)}
          className="menu__title"
        >
          View
        </span>
        <ul
          className={
            activatedMenu && id === hoverMenuId
              ? 'menu__list--enabled'
              : 'menu__list--disabled'
          }
          id="viewMenu"
        >
          <li className="menu__item" id="showLevelEditor">
            Show level editor
          </li>
          <li className="menu__item" id="toggleSectorImages">
            Toggle sector images
          </li>
          <li className="menu__item" id="toggleHeightValues">
            Toggle height values
          </li>
          <li className="menu__item" id="toggleSectorValues">
            Toggle sector values
          </li>
          <li className="menu__item" id="toggleOwnerValues">
            Toggle owner values
          </li>
          <li className="menu__item" id="toggleBuildingsValues">
            Toggle buildings values
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  menu: state.menu,
});

export const ViewMenu = connect(mapStateToProps, { toggleMenu, hoverMenu })(
  _ViewMenu
);
