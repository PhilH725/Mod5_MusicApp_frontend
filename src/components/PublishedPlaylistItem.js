
import React, {Component, Fragment} from 'react'
import PublishedPlaylistSongItem from './PublishedPlaylistSongItem'
import {Table, Header, Button, Icon} from 'semantic-ui-react'

class PublishedPlaylistItem extends Component {

  render() {
    return (
      <Fragment>
        <Header id="published-playlists-name-header" as="h2">{this.props.playlist.name}</Header>
        <Table id="published-playlists-table" color="blue" fixed>
          <Table.Header id="published-playlists-info-header">
            <Table.Row>
              <Table.HeaderCell>Created By</Table.HeaderCell>
              <Table.HeaderCell>Likes</Table.HeaderCell>
              <Table.HeaderCell>Liked?</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row id="published-playlists-song-header">
              <Table.Cell>{this.props.playlist.user.user}</Table.Cell>
              <Table.Cell>500</Table.Cell>
              <Table.Cell><Button inverted color="linkedin" icon><Icon name="heart"/></Button></Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Song Name</Table.HeaderCell>
              <Table.HeaderCell>Artist Name</Table.HeaderCell>
              <Table.HeaderCell>Album Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.playlist.songs.map(s => <PublishedPlaylistSongItem key={s.id} song={s}/>)}
          </Table.Body>
        </Table>
      </Fragment>
    )
  }
}

export default PublishedPlaylistItem

// <Item>
//   <Header as="h4">{this.props.playlist.name} - {this.props.playlist.user.user}</Header>
//   <List>
//     {this.props.playlist.songs.map(s => <PublishedPlaylistSongItem key={s.id} song={s}/>)}
//   </List>
// </Item>
// <Table color={color} key={color}>
//
//         <Table.Body>
//           <Table.Row>
//             <Table.Cell>Apples</Table.Cell>
//             <Table.Cell>200</Table.Cell>
//             <Table.Cell>0g</Table.Cell>
//           </Table.Row>
//           <Table.Row>
//             <Table.Cell>Orange</Table.Cell>
//             <Table.Cell>310</Table.Cell>
//             <Table.Cell>0g</Table.Cell>
//           </Table.Row>
//         </Table.Body>
//       </Table>
