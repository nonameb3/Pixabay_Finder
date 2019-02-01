import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

export class search extends Component {
  state = {
    name : '',
    select: '20'
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
          value={this.state.name}
          onChange={this.onChange('name')}
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
          {munuSelect.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </form>
    )
  }
}

const munuSelect = [
  {value: 10},
  {value: 20},
  {value: 30},
  {value: 50}
]

export default search
