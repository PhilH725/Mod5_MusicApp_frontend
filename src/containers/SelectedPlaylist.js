
import React, {Component} from 'react'
import Item from '../components/Item'
import { connect } from 'react-redux'

class SelectedPlaylist extends Component {

  render() {
    return (
      this.props.selectedPlaylist ?
      <div>
        <h3>Selected Playlist</h3>
        <h4>{this.props.selectedPlaylist.name}</h4>
        {this.props.selectedPlaylist.songs.map(s => <Item key={s.id} title={"songs"} data={s} />)}
      </div>
      :
      <div>
        <h3>Selected Playlist</h3>
        <h4>choose a playlist</h4>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist
})

export default connect(mapStateToProps)(SelectedPlaylist)
