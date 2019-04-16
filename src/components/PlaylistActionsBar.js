
import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePlaylist} from '../redux/actionCreators'

class PlaylistActionsBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      path: 'new'
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      if (this.state.path === 'new') {
        return <Redirect to='/playlists/new' />
      } else if (this.state.path === 'edit' && this.props.selectedPlaylist) {
        return <Redirect to='/playlists/edit' />
      }
    }
  }

  render() {
    return (
      <div id="playlist-list-action-bar" >
      {this.renderRedirect()}
        <Button.Group>
          <Button size="medium" inverted color="facebook" icon onClick={()=>this.setRedirect('add')}>
            <Icon name="plus"/>
          </Button>
          <Button size="medium" inverted color="vk" icon>
            <Icon name="ellipsis horizontal" />
          </Button>
          <Button size="medium" inverted color="linkedin" icon onClick={() => this.props.deletePlaylist(this.props.selectedPlaylist)}>
            <Icon name="minus" />
          </Button>
          <Button size="medium" inverted color="twitter" icon>
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
    deletePlaylist: (playlist) => dispatch(deletePlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistActionsBar)
