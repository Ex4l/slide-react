import React from 'react';
import Slide from './Slide';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

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
    slides: state
  }
}

const getVisibleSlides = 
(slides) => {
  return slides;
}

const VisibleSlideList = connect(
  mapStateToProps
)(SlideList);

export default VisibleSlideList;