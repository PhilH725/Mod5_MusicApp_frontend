
import React, {Component} from 'react'
import SongItem from '../components/SongItem'
import SortMenu from '../components/SortMenu'
import {Item} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MySongsContainer extends Component {

  render() {
    if (this.props.sortType === 'name') {
      this.props.songs.sort((a,b) => a.name.localeCompare(b.name))
    } else if (this.props.sortType === 'artist') {
      this.props.songs.sort((a,b) => a.artist.localeCompare(b.artist))
    } else if (this.props.sortType === 'album') {
      this.props.songs.sort((a,b) => a.album.name.localeCompare(b.album.name))
    }

    return (
      <Item.Group divided>
        <h3>My Songs:</h3>
        <SortMenu />
        {this.props.songs.map(s => <SongItem key={s.id} song={s} />)}
      </Item.Group>
    )
  }
}

const mapStateToProps = state => {
  return ({
    songs: state.mySongs,
    sortType: state.sortType
  })
}

export default connect(mapStateToProps)(MySongsContainer)
