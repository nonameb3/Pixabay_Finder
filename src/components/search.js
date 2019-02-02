import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FindImage, Clear } from '../actions'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

export class search extends Component {
  state = {
    findName : '',
    select: '20'
  }

  componentDidUpdate(preProps, preState){
    if(this.state.findName === preState.findName) return
    if(this.state.findName === ''){
      this.props.Clear()
      return
    }
    
    this.props.FindImage(this.state.findName, this.state.select)
  }

  onChange = value => e => {
    this.setState({ [value]: e.target.value })
  }

  render() {
    return (
      <form>
        <TextField
          label="Search for image."
          type="search"
          style={{width:500}}
          value={this.state.findName}
          onChange={this.onChange('findName')}
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          style={{width:500}}
          value={this.state.select}
          onChange={this.onChange('select')}
          helperText="Please select image limit."
          margin="normal"
        >
          {menuSelect.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </form>
    )
  }
}

const menuSelect = [
  {value: 10},
  {value: 20},
  {value: 30},
  {value: 50}
]

const mapStatetoProps = state => {
  return { ImageList : state.ImageList }
}

export default connect(mapStatetoProps, { FindImage, Clear })(search) 
