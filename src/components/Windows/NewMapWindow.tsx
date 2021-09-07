import { connect } from 'react-redux';
import { toggleNewMapWindow } from '../../actions/windowActions';
import { StoreState } from '../../reducers';
import { WindowProps } from './Windows';

import './Windows.css'

const _NewMapWindow = ({window: {newMapEnabled}, toggleNewMapWindow}: WindowProps) => {
    if(!newMapEnabled) return <></>

    return (
        <div className='window'>
            Create a new map
            <span onClick={() => toggleNewMapWindow(false)}>Close</span>
        </div>
    )
}

const mapStateToProps = (state: StoreState) => ({
    window: state.window
})

export const NewMapWindow = connect(mapStateToProps, {toggleNewMapWindow})(_NewMapWindow);
