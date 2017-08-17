import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = () => {
    const handleOnClick = () => {
        console.log('prout');
    }

    return (
        <FloatingActionButton onClick={handleOnClick}>
            <ContentAdd />
        </FloatingActionButton>
    );
}

export default AddButton;