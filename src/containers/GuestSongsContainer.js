
import React, {Component} from 'react'
import SongItem from '../components/SongItem'
import {Link} from 'react-router-dom'
import {Header, Item} from 'semantic-ui-react'
import {connect} from 'react-redux'

class GuestSongsContainer extends Component {

  render() {
    return (
      this.props.songs.length > 0 ?
      <Item.Group divided>
        <Header id="my-music-subheader" as="h3" dividing>Songs</Header>
        {this.props.songs.map(s => <SongItem key={s.id} song={s} />)}
      </Item.Group>
      :
      <div>
        <Header id="my-music-subheader" as="h3" dividing>Songs</Header>
        <div>&emsp;<Link to="find_music">Find music to add here!</Link></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.mySongs
})

export default connect(mapStateToProps)(GuestSongsContainer)
