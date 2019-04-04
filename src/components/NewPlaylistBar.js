
import React, { Component } from 'react'
import {updateNewPlaylistText} from '../redux/actionCreators'
import {creatingNewPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

class NewPlaylistBar extends Component {

  render () {
    return (
      <div>
        <input type="text" value={this.props.newPlaylistNameText} onChange={(e)=>{this.props.updateNewPlaylistText(e.target.value)}}/>
        <button onClick={()=>{this.props.creatingNewPlaylist(this.props.newPlaylistNameText, 3)}}>Create New</button>
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
    updateNewPlaylistText: (text) => {dispatch(updateNewPlaylistText(text))},
    creatingNewPlaylist: (name, id) => {dispatch(creatingNewPlaylist(name, id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistBar)
