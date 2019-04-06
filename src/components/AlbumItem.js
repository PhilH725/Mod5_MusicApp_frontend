
import React, {Component, Fragment} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'

// import {Link} from 'react-router-dom'
// <Link to={`/items/albums/${this.props.album.id}`}>{this.props.album.name}</Link>
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
      <Fragment>
        <Accordion.Title active={this.state.activeIndex === -1} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {this.props.album.name}
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === -1}>
          <p>song info here</p>
        </Accordion.Content>
      </Fragment>
    )
  }
}

export default AlbumItem
