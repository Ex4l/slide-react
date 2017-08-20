import React from 'react';
import {connect} from 'react-redux';
import { addSlide } from '../actions/index'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import slides from '../reducers/slides'

let AddSlide = ({ dispatch }) => {
    const handleOnClick = () => {
        dispatch(addSlide());
    }

    return (
        <FloatingActionButton onClick={handleOnClick}>
            <ContentAdd />
        </FloatingActionButton>
    );
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(slides())
      }
    }
  }

AddSlide = connect(mapDispatchToProps)(AddSlide);

export default AddSlide;