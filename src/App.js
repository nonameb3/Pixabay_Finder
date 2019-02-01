import React from 'react'
import Navbar from './components/navbar'
import Search from './components/search'
import Grid from '@material-ui/core/Grid'

const App = () => { 
  return (
    <div>
      <Navbar/>
      <Grid container justify = "center" spacing={0}>
        <Search/>
      </Grid>
    </div>
  )
}

export default App
