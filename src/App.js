import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Reducer from './reducer'
import Navbar from './components/navbar'
import Search from './components/search'
import ShowImage from './components/show'
import Grid from '@material-ui/core/Grid'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))
const App = () => { 
  return (
    <Provider store={store}>
      <Navbar/>
      <Grid container justify = "center" spacing={0}>
        <Search/>
      </Grid>
      <br/>
      <ShowImage/>
    </Provider>
  )
}

export default App
