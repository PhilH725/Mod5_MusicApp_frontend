
import React, {Component} from 'react'
import {Accordion, Icon, Item, Image, Button, Segment} from 'semantic-ui-react'

class AlbumItem extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    return (
      <Segment>
      <Button onClick={console.log('hi')} float="right">Unfavorite</Button>
        <Accordion.Title active={this.state.activeIndex === -1} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <Image id="my-album-dropdown-image" size="tiny" src={this.props.album.image} alt={"album-art"} />
          {this.props.album.name}
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === -1}>
          <Item.Group divided>
            {this.props.album.songs.map(s => <Item key={s.id}>
              <Item.Image size='mini' src={require('../img/image.png')} />

              <Item.Content>
                <Item.Header>{s.name}</Item.Header>
                <Item.Meta>{s.artist}</Item.Meta>
              </Item.Content>
            </Item>)}

          </Item.Group>
        </Accordion.Content>
      </Segment>
    )
  }
}
//make the song children their own component

export default AlbumItem
