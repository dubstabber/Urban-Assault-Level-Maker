import { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { toggleNewMapWindow } from '../../actions/windowActions';
import { createMap } from '../../actions/mapActions';
import { StoreState } from '../../reducers';

import './Windows.css';
import './NewMapWindow.css';

const _NewMapWindow = ({
  window: { newMapEnabled },
  toggleNewMapWindow,
  createMap,
}: any) => {
  const [horizontalNumberInput, setHorizontalNumberInput] =
    useState<string>('');
  const [verticalNumberInput, setVerticalNumberInput] = useState<string>('');

  if (!newMapEnabled) return <></>;

  function handleCreate(): void {
    let horizontalNumber = parseInt(horizontalNumberInput);
    let verticalNumber = parseInt(verticalNumberInput);

    if (horizontalNumber && verticalNumber) {
      toggleNewMapWindow(false);
      createMap(horizontalNumber, verticalNumber);
      setHorizontalNumberInput('');
      setVerticalNumberInput('');
    }
  }

  function verifyHorizontalInput(e: ChangeEvent<HTMLInputElement>) {
    const pattern = /[a-z!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/gi;
    if (
      !e.target.value.match(pattern) &&
      e.target.value[0] !== '0' &&
      e.target.value[0] !== ' '
    ) {
      setHorizontalNumberInput(e.target.value);
    }
  }

  function verifyVerticalInput(e: ChangeEvent<HTMLInputElement>) {
    const pattern = /[a-z!@#$%^&*()_+\-=[\]{};~`':"\\|,.<>/?]/gi;
    if (
      !e.target.value.match(pattern) &&
      e.target.value[0] !== '0' &&
      e.target.value[0] !== ' '
    ) {
      setVerticalNumberInput(e.target.value);
    }
  }

  return (
    <div className="window">
      <div className="window__title">Create a new map</div>
      <hr />
      <div onSubmit={createMap} className="newMapWindow">
        <p className="newMapWindow__info">
          Enter number of sectors for horizontal and vertical space:
        </p>
        <span className="newMapWindow__label">Horizontal sectors:</span>
        <input
          id="horizontalSectors"
          className="input newMapWindow__input"
          onChange={verifyHorizontalInput}
          value={horizontalNumberInput}
        />
        <span className="newMapWindow__label">Vertical sectors:</span>
        <input
          id="verticalSectors"
          className="input newMapWindow__input"
          onChange={verifyVerticalInput}
          value={verticalNumberInput}
        />
        <div className="newMapWindow__info">
          (Borders will be added automatically to these values)
        </div>
        <div className="newMapWindow__buttons">
          <span
            onClick={handleCreate}
            className={
              horizontalNumberInput && verticalNumberInput
                ? 'button'
                : 'inactive-button'
            }
          >
            Create
          </span>
          <span onClick={() => toggleNewMapWindow(false)} className="button">
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  window: state.window,
});

export const NewMapWindow = connect(mapStateToProps, {
  toggleNewMapWindow,
  createMap,
})(_NewMapWindow);
