
import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePlaylist} from '../redux/actionCreators'

const PlaylistActionsBar = (props) => {

  return (
    <div>
      <Link to="/playlists/new"><Button floated='left' size="tiny">New Playlist</Button></Link>
      <Button floated='right' size="tiny" onClick={() => props.deletePlaylist(props.selectedPlaylist)}>Delete Playlist</Button>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist
})

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: (playlist) => dispatch(deletePlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistActionsBar)
