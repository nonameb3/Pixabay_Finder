import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducer'
import Navbar from './components/navbar'
import Search from './components/search'
import Grid from '@material-ui/core/Grid'

const App = () => { 
  return (
    <Provider store={createStore(Reducer)}>
      <Navbar/>
      <Grid container justify = "center" spacing={0}>
        <Search/>
      </Grid>
    </Provider>
  )
}

export default App
