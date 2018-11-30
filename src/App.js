import React, { Component } from 'react';
import './App.css';
import AppBody from './components/app-body/AppBody.jsx';
import eagleLogoWhite from './components/images/eagle-logo-white.png';
import MaterialIcon, { colorPalette } from 'material-icons-react';


class App extends Component {
  render() {

    let chirpKeys = ['0', '1', '2'];

    return (
      <div className="App">
        <header className="App-header row theme-bg-color-black">
          <div className='col-3 logo-wrapper'>
            <img src={eagleLogoWhite} className='App-logo' />
          </div>
          <h2 className="col-6 theme-color-white">chirper</h2>
          <div className='col-3'>
            <div className='icon-wrapper col-centered'>
              <MaterialIcon icon='dehaze' color='#FEFEFE' size={60} />
            </div>
          </div>
        </header>
        <AppBody />
      </div>
    );
  }
}

export default App;
