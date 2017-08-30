import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MenuApp from '../component/MenuApp';
import LeftDrawer from '../component/LeftDrawer';
import Toolbar from '../containers/ToolbarContainer';
import SlideList from '../containers/SlideListContainer';
import Styles from '../styles';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <MenuApp />
            <LeftDrawer />
            <Toolbar />
            <div style={{ width: '12%', margin: 'auto' }}>
              <SlideList style={Styles().centerPaperstyle} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
