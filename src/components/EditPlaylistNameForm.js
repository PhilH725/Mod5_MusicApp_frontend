
import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {changePlaylistName} from '../redux/actionCreators'
import {connect} from 'react-redux'

const EditPlaylistNameForm = (props) => {

  return (
    <Form onSubmit={(e) => props.changePlaylistName(props.editingPlaylist, e.target.firstElementChild.children[1].value)} >
      <Form.Field>
        <label>Edit Name</label>
        <input id="edit-playlist-name-input" placeholder='edit playlist name' />
      </Form.Field>
      <Button type="submit">
        Yo, supmit
      </Button>
    </Form>
  )
}

const mapStateToProps = state => ({
  editingPlaylist: state.editingPlaylist
})

const mapDispatchToProps = dispatch => {
  return {
    changePlaylistName: (playlist, name) => dispatch(changePlaylistName(playlist,name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistNameForm)
