import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';

let AddSlide = ({ handleOnClick }) => {
    return (
        <FloatingActionButton onClick={() => handleOnClick()}>
            <ContentAdd />
        </FloatingActionButton>
    );
}

AddSlide.propTypes = {
    handleOnClick: PropTypes.func.isRequired
}

export default AddSlide;