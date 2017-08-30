import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import ContentUndoIcon from 'material-ui/svg-icons/content/undo';
import ContentRedoIcon from 'material-ui/svg-icons/content/redo';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';

const ToolbarComp = ({canUndo, canRedo, onUndo, onRedo }) => {
  return (
    <Toolbar style={{ paddingLeft: 230 }}>
      <ToolbarGroup style={{ margin: 'auto' }}>
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

        <IconButton touch={true} onClick={() => onUndo()} disabled={!canUndo}>
          <ContentUndoIcon />
        </IconButton>

        <IconButton touch={true} onClick={() => onRedo()} disabled={!canRedo}>
          <ContentRedoIcon />
        </IconButton>

      </ToolbarGroup>
    </Toolbar>
  );
}

ToolbarComp.propTypes = {
  canUndo : PropTypes.bool.isRequired,
  canRedo : PropTypes.bool.isRequired,
  onUndo : PropTypes.func.isRequired,
  onRedo : PropTypes.func.isRequired
}

export default ToolbarComp;