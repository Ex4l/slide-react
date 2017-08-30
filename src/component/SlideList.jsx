import React from 'react';
import Slide from './Slide';
import PropTypes from 'prop-types';

const SlideList = ({slides, style}) => (
  <ul>
    {slides.map(slide => (
      <Slide style={style} key={slide.id} {...slide}/>
    ))}
  </ul>
);

SlideList.propTypes = {
  slides: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired
}

export default SlideList;