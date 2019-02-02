import { combineReducers } from 'redux'

function ImageList(state=[], action) {
  switch(action.type){
    case 'fect_image':
      return [...action.payload.hits]
    case 'clear':
      return []
    default:
      return state
  }
}

export default combineReducers({
  ImageList
})