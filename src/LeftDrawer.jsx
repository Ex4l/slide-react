import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from './Paper'
import AddButton from './AddButton'

const LeftDrawer = () =>
  (
    <div>
      <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64, width: '200px'}} >
        <div style={{padding: 10}}>
          <AddButton />
        </div>
        <Paper />
      </Drawer>
    </div>
  );

export default LeftDrawer;