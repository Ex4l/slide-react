import React from 'react';
import AppBar from 'material-ui/AppBar';

const MenuApp = () => (
    <div>
        <AppBar
            title="SlideReact"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{ paddingLeft: 230 }}
        />
    </div>
)

export default MenuApp;