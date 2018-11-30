import React, { Component } from 'react';
import './App.css';
import AppBody from './components/app-body/AppBody.jsx';
import eagleLogoDark from './components/images/eagle-logo-dark.png';
import eagleLogoWhite from './components/images/eagle-logo-white.png';
import eagleLogoLightGrey from './components/images/eagle-logo-lightgrey.png';



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
          <div className='col-3'></div>
        </header>
        <AppBody />
      </div>
    );
  }
}

export default App;
