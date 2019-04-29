
import React, {Component} from 'react'
import {Button, Sidebar, Menu, Segment, Icon, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

// <iframe id="youtube-video-player" title="song" src={`https://www.youtube.com/embed/${props.videoId}`}>
// </iframe>
class MusicPlayer extends Component {
  render() {
    return (
      
    )
  }
}

const mapStateToProps = state => ({
  videoId: state.videoId,
  musicPlaybackStatus: state.musicPlaybackStatus
})

export default connect(mapStateToProps)(MusicPlayer)
