/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Iconbutton from '@material-ui/core/IconButton'
import Zoom from '@material-ui/core/Zoom/Zoom'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'

export class show extends Component {
  renderList = () => {
    return this.props.ImageList.map((image) => {
      return(
        <GridListTile key={image.id}>
          <img src={image.largeImageURL} alt={image.id} />
          <GridListTileBar
            title={image.tags}
            subtitle={
              <span>
                by <strong>{image.user}</strong>
              </span>
            }
            actionIcon={
              <Iconbutton>

              </Iconbutton>
            }
          />
        </GridListTile>
      )
    })
  }

  render() {
    return (
      <GridList cols={4}>
        {this.renderList()}
      </GridList>
    )
  }
}

const mapStateToProps = state => {
  return { ImageList: state.ImageList }
}

export default connect(mapStateToProps, {})(show)
