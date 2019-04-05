
import React from 'react'
import {List} from 'semantic-ui-react'
import {changeSelectedPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

const PlaylistItem = (props) => {

  return (
    <List.Item onClick={props.changeSelectedPlaylist}>
      <h4>{props.data.name}</h4>
    </List.Item>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSelectedPlaylist: () => dispatch(changeSelectedPlaylist(ownProps.data))
  }
}

export default connect(null, mapDispatchToProps)(PlaylistItem)
