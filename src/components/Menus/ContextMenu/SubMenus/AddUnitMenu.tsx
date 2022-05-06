import { useState, useEffect } from 'react';
import UAdata from '../../../../UAdata.json';

const AddUnitMenu = ({ faction }: { faction: string }) => {
  const [unitList, setUnitList] = useState([]);
  const [positionX, setPositionX] = useState('100%');

  useEffect(() => {
    const data: any = UAdata.original;
    const units = data[faction].units;
    setUnitList(units);
  }, [faction]);

  return (
    <li className="menu__items">
      {faction} unit
      <ul style={{ left: positionX }} className="menu__submenu">
        {unitList.map((unit: any) => {
          return (
            <li className="menu__item">
              <i></i>
              {unit.name}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default AddUnitMenu;
