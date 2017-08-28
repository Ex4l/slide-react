import undoable, { distinctState } from 'redux-undo';

const slides = (state = {
  slides: []
}, action) => {
  switch (action.type) {
    case 'SLIDE_ADD':
      return {
        ...state,
        slides: [...state.slides, action.slide]
      }
    default:
      return state;
  }
}

const undoableSlides = undoable(slides, {
  filter: distinctState()
})

export default undoableSlides;