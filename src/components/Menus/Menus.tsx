import { connect } from 'react-redux';
import { FileMenu } from './FileMenu';
import { ViewMenu } from './ViewMenu';
import { toggleContextMenu } from '../../actions/menuActions';

import './Menus.css';

const _Menus = ({ toggleContextMenu }: any) => {
  return (
    <div onClick={() => toggleContextMenu(false)} className="menu">
      <FileMenu id={0} />
      <ViewMenu id={1} />
    </div>
  );
};

export const Menus = connect(null, { toggleContextMenu })(_Menus);
