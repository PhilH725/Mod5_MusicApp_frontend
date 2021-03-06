
import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePlaylist, sharingPlaylist} from '../redux/actionCreators'

class PlaylistActionsBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      path: 'new'
    }
  }

  setRedirect = (path) => {
    this.setState({
      path: path,
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      if (this.state.path === 'new') {
        return <Redirect to='/playlists/new' />
      } else if (this.state.path === 'edit' && this.props.selectedPlaylist) {
        return <Redirect to={`/playlists/edit/${this.props.selectedPlaylist.id}`} />
      }
    }
  }

  render() {
    return (
      <div id="playlist-list-action-bar" >
      {this.renderRedirect()}
        <Button.Group>
          <Button size="medium" inverted color="facebook" icon onClick={()=>this.setRedirect('new')}>
            <Icon name="plus"/>
          </Button>
          <Button size="medium" inverted color="vk" icon onClick={()=>this.setRedirect('edit')}>
            <Icon name="ellipsis horizontal" />
          </Button>
          <Button size="medium" inverted color="linkedin" icon onClick={() => this.props.deletePlaylist(this.props.selectedPlaylist)}>
            <Icon name="minus" />
          </Button>
          <Button size="medium" inverted color="twitter" icon onClick={() => this.props.sharingPlaylist(this.props.selectedPlaylist)} >
            <Icon name="share" />
          </Button>
        </Button.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist
})

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: (playlist) => dispatch(deletePlaylist(playlist)),
    sharingPlaylist: (playlist) => dispatch(sharingPlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistActionsBar)
