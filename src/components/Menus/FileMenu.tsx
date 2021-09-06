import { connect } from 'react-redux';
import { toggleMenu, hoverMenu } from '../../actions/menuActions';
import { toggleNewMapWindow } from '../../actions/windowActions';
import { StoreState } from '../../reducers';

const _FileMenu = ({id,menu:{activatedMenu, hoverMenuId}, toggleMenu, hoverMenu, toggleNewMapWindow}:any) => {

    return (
        <>
            <div className="menu__container">
                <span onClick={toggleMenu} onMouseOver={() => hoverMenu(id)} className="menu__title">File</span>
                <ul className={activatedMenu && id === hoverMenuId ? "menu__list--enabled" : "menu__list--disabled"}>
                    <li onClick={() => toggleNewMapWindow(true)} className="menu__item" id="newMap">New map</li>
                    <li className="menu__item" id="openMap">Open map</li>
                    <li className="menu__item" id="saveMap">Save</li>
                    <li className="menu__item" id="saveAsMap">Save As...</li>
                    <li className="menu__item" id="closeMap">Close current map</li>
                    <li className="menu__item" id="exit">Exit</li>
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state: StoreState) => ({
    menu: state.menu
})

export const FileMenu = connect(mapStateToProps, {toggleMenu, hoverMenu, toggleNewMapWindow})(_FileMenu);
