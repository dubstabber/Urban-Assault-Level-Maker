import Menus from './components/Menus/Menus';
import Map from './components/Map/Map';

import './App.css';

// const fs = window.require('fs');

function App(): JSX.Element {
  return (<div>
      <Menus />
      <Map />
    </div>
  );
}

export default App;
