import axios from 'axios'

export const FindImage = (q_value, p_value=20) => async dispatch => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params:{
      key: '11475515-720ffb44f8a87a649b1e60c5c',
      q: q_value,
      per_page: p_value,
      image_type: 'photo'
    }
  })

  dispatch({
    type: 'fect_image',
    payload: response.data
  })
}

export const Clear = () => {
  return { type: 'clear'}
}
