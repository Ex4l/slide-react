import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuApp from './MenuApp';
import LeftDrawer from './LeftDrawer';
import './App.css';

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
