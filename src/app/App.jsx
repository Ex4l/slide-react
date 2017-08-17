import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MenuApp from '../component/MenuApp';
import LeftDrawer from '../component/LeftDrawer';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <MenuApp />
            <div>
              <LeftDrawer />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
