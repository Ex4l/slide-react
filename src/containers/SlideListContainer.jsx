import SlideList from '../component/SlideList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    slides: state.slides.present.slides
  }
}

const SlideListContainer = connect(mapStateToProps)(SlideList);

export default SlideListContainer;