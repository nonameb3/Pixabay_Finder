import { combineReducers } from 'redux'

function ImageList(state=[], action) {
  switch(action.type){
    case 'fect_image':
      return [...action.payload.hits]
    default:
      return state
  }
}

export default combineReducers({
  ImageList
})