import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import Toolbar from '../component/Toolbar';

const mapStateToProps = state => {
    return {
        canUndo: state.slides.past.length > 0,
        canRedo: state.slides.future.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(UndoActionCreators.undo()),
        onRedo: () => dispatch(UndoActionCreators.redo())
    }
}

const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default ToolbarContainer; 