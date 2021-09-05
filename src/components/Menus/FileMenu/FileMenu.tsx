import { connect } from 'react-redux';
import { MenuState, toggleMenu } from '../../../actions/menuActions';
import { StoreState } from '../../../reducers';

interface FileMenuProps {
    menu: MenuState;
    toggleMenu(): void;
}

const _FileMenu = ({menu:{activatedMenu}, toggleMenu}:FileMenuProps) => {
    return (
        <>
            <span onClick={toggleMenu} className="menu__title">File</span>
            <ul className={activatedMenu ? "menu__list--enabled" : "menu__list--disabled"} id="fileMenu">
                <li className="menu__item" id="newMap">New map</li>
                <li className="menu__item" id="openMap">Open map</li>
                <li className="menu__item" id="saveMap">Save</li>
                <li className="menu__item" id="saveAsMap">Save As...</li>
                <li className="menu__item" id="closeMap">Close current map</li>
                <li className="menu__item" id="exit">Exit</li>
            </ul>
        </>
    )
}

const mapStateToProps = (state: StoreState) => ({
    menu: state.menu
})

export const FileMenu = connect(mapStateToProps, {toggleMenu})(_FileMenu);
