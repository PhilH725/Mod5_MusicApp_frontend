
import React, {Component, Fragment} from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {creatingNewPlaylist} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistForm extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      newPlaylistNameText: "",
      redirect: false
    })
  }

  handleChange = (e) => {
    this.setState({
      newPlaylistNameText: e.target.value
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/my_playlists' />
    }
  }

  createNewPlaylist = (e) => {
    e.preventDefault()
    if (this.state.newPlaylistNameText.length > 0 && this.props.newPlaylistSongs.length > 0) {
      this.setRedirect()
      this.props.creatingNewPlaylist(this.state.newPlaylistNameText, this.props.newPlaylistSongs, this.props.user.id)
    } else if (this.state.newPlaylistNameText.length === 0) {
      window.alert('Please enter a playlist name')
    } else if (this.props.newPlaylistSongs.length === 0) {
      window.alert('At least one song is required to create a playlist')
    }
  }

  render() {
    return (
      <Fragment>
      {this.renderRedirect()}
      <Form id="new-playlist-form" onSubmit={this.createNewPlaylist} >
        <Form.Field id="new-playlist-form-field" >
          <label>Enter playlist name:</label>
          <input id="new-playlist-name-input" placeholder='...' onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit" inverted color="linkedin">Create</Button>
      </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  newPlaylistSongs: state.newPlaylistSongs
})

const mapDispatchToProps = dispatch => {
  return {
    creatingNewPlaylist: (name, songs, id) => dispatch(creatingNewPlaylist(name, songs, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm)
