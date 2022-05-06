import { NewMapWindow } from './NewMapWindow';
import { WindowState } from '../../reducers/windowReducer';

export interface WindowProps {
    window: WindowState,
    toggleNewMapWindow(state: boolean): void
}

const Windows = () => {
    return (
        <NewMapWindow />
    )
}

export default Windows
