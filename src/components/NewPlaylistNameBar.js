
import React, { Component } from 'react'
import {updateNewPlaylistText} from '../redux/actionCreators'
// import {creatingNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

// <button onClick={()=>{this.props.creatingNewPlaylist(this.props.newPlaylistNameText, 1)}}>Create New</button>
class NewPlaylistNameBar extends Component {

  render () {
    return (
      <div>
        Enter Name: <input type="text" value={this.props.newPlaylistNameText} onChange={(e)=>{this.props.updateNewPlaylistText(e.target.value)}}/>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  //gonna have to add id here, but ill wait until auth cuz that will change anyway
  newPlaylistNameText: state.newPlaylistNameText
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNewPlaylistText: (text) => {dispatch(updateNewPlaylistText(text))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistNameBar)
