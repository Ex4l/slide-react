let nextSlideId = 0
export const addSlide = text => {
  return {
    type: 'add.new.slide',
    id: nextSlideId++,
    text
  }
}