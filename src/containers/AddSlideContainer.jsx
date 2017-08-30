import { connect } from 'react-redux';
import { addSlide } from '../actions/index';
import AddSlide from '../component/AddSlide';

const mapDispatchToProps = dispatch => {
    return {
        handleOnClick: () => dispatch(addSlide())
    }
};

export default connect(null, mapDispatchToProps)(AddSlide);