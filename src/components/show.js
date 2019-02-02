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
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.ImageList !== this.props.ImageList) {
      console.log('update')
    }
  }

  renderList = () => {
    return this.props.ImageList.map((img) => {
      return(
        <li>{img.user}</li>
      );
    });
  }

  render() {
    const { ImageList } = this.props
    let imageRender = (<div>hoho</div>);

    if( ImageList.length > 1){
      imageRender = this.renderList()
      // imageRender = (
      //   <GridList cols={3}>
      //     {ImageList.map(image => (
      //     <GridListTile key={image.id}>
      //       <img src={image.largeImageURL} alt={image.id} />
      //       <GridListTileBar
      //         title={image.tags}
      //         subtitle={
      //           <span>
      //             by <strong>{image.user}</strong>
      //           </span>
      //         }
      //         actionIcon={
      //           <Iconbutton>

      //           </Iconbutton>
      //         }
      //       />
      //     </GridListTile>
      //     ))}
      //   </GridList>
      // )
    }
    return (
      <div>
        {imageRender}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ImageList: state.ImageList }
}

export default connect(mapStateToProps, {})(show)
