let nextSlideId = 0
export const addSlide = () => {
  return {
    type: 'SLIDE_ADD',
    slide: {
      id: nextSlideId++,
      colour: 'white'
    }
  }
}