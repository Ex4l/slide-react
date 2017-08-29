import React from 'react';
import Drawer from 'material-ui/Drawer';
import AddSlide from './AddSlide';
import SlideList from './SlideList';
import Styles from '../styles';

const LeftDrawer = () =>
  (
    <div>
      <Drawer containerStyle={{ width: '200px' }}>
        <div style={{ padding: 10 }}>
          <AddSlide />
        </div>
        <SlideList style={Styles().leftDrawerPaperstyle} />
      </Drawer>
    </div>
  );

export default LeftDrawer;