const slideReducer = (state = {
  slides:[]
}, action) => {
    switch (action.type) {
      case 'SLIDE_ADD':
        return {
          ...state,
          slides: [...state.slides, action.slide]
        }
      default:
        return state
    }
  }

 export default slideReducer;