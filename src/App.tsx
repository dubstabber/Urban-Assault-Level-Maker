import Menus from './components/Menus/Menus';
import Map from './components/Map/Map';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

// const fs = window.require('fs');

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Menus />
      <Map />
    </Provider>
  );
}

export default App;
