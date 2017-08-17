import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from './Paper'

const LeftDrawer = () =>
  (
    <div>
      <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64, width: '200px'}} >
        <Paper />
      </Drawer>
    </div>
  );

export default LeftDrawer;