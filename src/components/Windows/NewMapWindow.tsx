import { connect } from 'react-redux';
import { toggleNewMapWindow } from '../../actions/windowActions';
import { StoreState } from '../../reducers';
import { WindowProps } from './Windows';

import './Windows.css';
import './NewMapWindow.css';

const _NewMapWindow = ({
  window: { newMapEnabled },
  toggleNewMapWindow,
}: WindowProps) => {
  if (!newMapEnabled) return <></>;

  function createMap(e: any) {
    toggleNewMapWindow(false);
    const horizontalNumber = e.target.horizontalSectors.value;
    const verticalNumber = e.target.verticalSectors.value;
    console.log(`horizontal number: ${horizontalNumber}`);
    console.log(`vertical number: ${verticalNumber}`);
  }

  return (
    <div className="window">
      <div className="window__title">Create a new map</div>
      <form onSubmit={createMap} className="newMapWindow">
        <p className="newMapWindow__info">
          Enter number of sectors for horizontal and vertical space:
        </p>
        <span className="newMapWindow__label">Horizontal sectors:</span>
        <input id="horizontalSectors" className="input newMapWindow__input" />
        <span className="newMapWindow__label">Vertical sectors:</span>
        <input id="verticalSectors" className="input newMapWindow__input" />
        <div className="newMapWindow__info">
          (Borders will be added automatically to these values)
        </div>
        <div className="newMapWindow__buttons">
          <input type="submit" value="Create" className="button" />
          <span onClick={() => toggleNewMapWindow(false)} className="button">
            Close
          </span>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  window: state.window,
});

export const NewMapWindow = connect(mapStateToProps, { toggleNewMapWindow })(
  _NewMapWindow
);
