import React from 'react';
import Slide from './Slide';
import { connect } from 'react-redux';

const SlideList = ({slides, style}) => (
  <ul>
    {slides.map(slide => (
      <Slide style={style} key={slide.id} {...slide}/>
    ))}
  </ul>
)

const mapStateToProps = state => {
  return {
    slides: state.slides.present.slides
  }
}

export default connect(mapStateToProps)(SlideList);