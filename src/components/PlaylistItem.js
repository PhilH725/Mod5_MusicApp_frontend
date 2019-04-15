
import React from 'react'
import {List, Header} from 'semantic-ui-react'
import {changeSelectedPlaylist} from '../redux/actionCreators'
import { connect } from 'react-redux'

const PlaylistItem = (props) => {
  return (
    <List.Item id="playlist-list-item" onClick={props.changeSelectedPlaylist}>
      <Header as="h4" color={props.color}> {props.data.name} </Header>
    </List.Item>
  )
}

const mapStateToProps = (state, ownProps) => ({
  color: state.selectedPlaylist ? state.selectedPlaylist.id === ownProps.data.id ? "blue" : "black" : 'black'
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeSelectedPlaylist: () => dispatch(changeSelectedPlaylist(ownProps.data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem)
