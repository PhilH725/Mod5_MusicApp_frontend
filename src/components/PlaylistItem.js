
import React from 'react'
import {changeSelectedPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

const PlaylistItem = (props) => {

  return (
    <div onClick={props.changeSelectedPlaylist}>
      <h4>{props.data.name}</h4>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSelectedPlaylist: () => dispatch(changeSelectedPlaylist(ownProps.data))
  }
}

export default connect(null, mapDispatchToProps)(PlaylistItem)
