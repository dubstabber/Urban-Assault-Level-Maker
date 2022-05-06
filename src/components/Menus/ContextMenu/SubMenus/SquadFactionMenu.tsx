import { useState } from 'react';
import AddUnitMenu from './AddUnitMenu';

export const SquadFactionMenu = (props: any) => {
  const [positionX, setPositionX] = useState('100%');

  function handleHover() {}
  return (
    <li onMouseEnter={handleHover} className="menu__items">
      Add squad here
      <ul style={{ left: positionX }} className="menu__submenu">
        <AddUnitMenu faction={'resistance'} />
        <AddUnitMenu faction={'ghorkov'} />
        <AddUnitMenu faction={'taerkasten'} />
        <AddUnitMenu faction={'mykonian'} />
        <AddUnitMenu faction={'sulgogar'} />
        <AddUnitMenu faction={'training'} />
        <AddUnitMenu faction={'special'} />
      </ul>
    </li>
  );
};
