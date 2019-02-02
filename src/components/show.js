/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Iconbutton from '@material-ui/core/IconButton'
import Zoomin from '@material-ui/icons/ZoomIn'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export class show extends Component {
  state = {
    status: false,
    select: {}
  }

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
              <Iconbutton onClick={this.handleClickOpen(image)}>
                <Zoomin style={{color:"white"}}/>
              </Iconbutton>
            }
          />
        </GridListTile>
      )
    })
  }

  handleClickOpen = image => () => {
    this.setState({ status: true, select: image});
    console.log(image)
  };

  handleClose = () => {
    this.setState({ status: false });
  };

  render() {
    const { select } = this.state
    return (
      <div>
        <GridList cols={4}>
          {this.renderList()}
        </GridList>
        <Dialog
            onClose={this.handleClose}
            open={this.state.status}
            fullWidth={false}
            aria-labelledby="max-width-dialog-title"
          >
            <DialogTitle id="max-width-dialog-title">{select.tags}</DialogTitle>
            <DialogContent>
              <img src={select.largeImageURL} alt={select.id} style={{width: '100%'}}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return { ImageList: state.ImageList }
}

export default connect(mapStateToProps)(show)
