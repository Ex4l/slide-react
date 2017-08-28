import React from 'react';
import Slide from './Slide';
import { connect } from 'react-redux';

const SlideList = ({slides}) => (
  <ul>
    {slides.map(slide => (
      <Slide key={slide.id} {...slide}/>
    ))}
  </ul>
)

const mapStateToProps = state => {
  console.log(state);
  return {
    slides: state.slides.present.slides
  }
}

export default connect(mapStateToProps)(SlideList);