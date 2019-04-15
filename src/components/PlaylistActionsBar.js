
import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePlaylist} from '../redux/actionCreators'

class PlaylistActionsBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/playlists/new' />
    }
  }

  render() {
    return (
      <div id="playlist-list-action-bar" >
      {this.renderRedirect()}
        <Button.Group>
          <Button floated="right" size="large" icon onClick={this.setRedirect}>
            <Icon name="plus"/>
          </Button>
          <Button floated='right' size="large" onClick={() => this.props.deletePlaylist(this.props.selectedPlaylist)} icon>
            <Icon name="ellipsis horizontal" />
          </Button>
          <Button floated="right" size="large" icon>
            <Icon name="minus" />
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
