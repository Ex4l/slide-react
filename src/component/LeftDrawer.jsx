import React from 'react';
import Drawer from 'material-ui/Drawer';
import AddSlide from './AddSlide';
import SlideList from './SlideList';

const LeftDrawer = () =>
  (
    <div>
      <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64, width: '200px'}} >
        <div style={{padding: 10}}>
          <AddSlide />
        </div>
        <SlideList />
      </Drawer>
    </div>
  );

export default LeftDrawer;