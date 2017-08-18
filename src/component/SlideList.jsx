import React from 'react'
import Slide from './Slide'

let slides = [];

const SlideList = () => (
  <ul>
    {slides.map(slide => (
      <Slide key={slide.id} {...slide}/>
    ))}
  </ul>
)

export default SlideList;