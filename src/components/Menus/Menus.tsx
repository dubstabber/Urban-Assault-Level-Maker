import { FileMenu } from './FileMenu/FileMenu';
import { ViewMenu } from './ViewMenu/ViewMenu';
import { MenuState } from '../../reducers/menuReducer';

import './Menus.css'

export interface MenuProps {
    menu: MenuState;
    toggleMenu(): void;
    hoverMenu(menuId: number): void;
    id: number;
}

const Menus = () => {
    return (
        <div className='menu'>
            <FileMenu id={0} />
            <ViewMenu id={1} />
        </div>
    )
}

export default Menus;
