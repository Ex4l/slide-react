let nextSlideId = 0
export const addSlide = () => {
  return {
    type: 'add.new.slide',
    id: nextSlideId++,
  }
}