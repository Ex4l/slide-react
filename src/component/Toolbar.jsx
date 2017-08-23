import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar style={{paddingLeft: 230}}>
        <ToolbarGroup style={{margin:'auto'}}>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <ContentAddIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Add Slide" />
            <MenuItem primaryText="Add TextBox" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}