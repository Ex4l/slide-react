const slides = (state = {
  slides:[]
}, action) => {
    switch (action.type) {
      case 'add.new.slide':
        return {
          ...state,
          slides: [...state.slides, action.slide]
        }
      default:
        return state
    }
  }

 export default slides;