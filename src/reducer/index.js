import { combineReducers } from 'redux'

function ImageList(state=[], action) {
  switch(action.type){
    case 'fect_image':
      return [...state, action.payload]
    default:
      return state
  }
}

export default combineReducers({
  ImageList
})