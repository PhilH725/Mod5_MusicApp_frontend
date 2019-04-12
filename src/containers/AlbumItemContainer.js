
import React from 'react'
import AlbumItem from '../components/AlbumItem'
import AlbumItemTracklist from '../components/AlbumItemTracklist'
import {List} from 'semantic-ui-react'

const AlbumItemContainer = (props) => {

  return (
    <List.Item>
      <AlbumItem album={props.album} />
      <AlbumItemTracklist album={props.album} />
    </List.Item>
  )
}

export default AlbumItemContainer
