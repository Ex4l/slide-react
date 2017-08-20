const slides = (state = [], action) => {
    switch (action.type) {
      case 'add.new.slide':
        return [
          ...state,
          {
            id: action.id
          }
        ]
      default:
        return state
    }
  }

 export default slides;