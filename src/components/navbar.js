import React, { Component } from 'react'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export class navbar extends Component {
  render() {
    return (
      <div>
        <Appbar position="static" style={{backgroundColor:"#29b6f6"}}>
          <Toolbar style={style.toolbar} > 
            <Typography variant="h6" color="inherit" >
              Photos
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Appbar>
      </div>
    )
  }
}

const style = {
  toolbar: {
    justifyContent: 'space-between',
    alignItems: ''
  }
}

export default navbar
