
import React, {Component} from 'react'
import {Menu, Input} from 'semantic-ui-react'
import {updateSortType, updateSortSearchText} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SongsSortMenu extends Component {

  render() {
    const { activeItem } = this.props.sortType

    return (
      <Menu id="sort-menu" text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='name'
          active={activeItem === 'name'}
          onClick={()=> this.props.updateSortType("name")}
        />
        <Menu.Item
          name='artist'
          active={activeItem === 'artist'}
          onClick={()=> this.props.updateSortType('artist')}
        />
        <Menu.Item
          name='album'
          active={activeItem === 'album'}
          onClick={()=> this.props.updateSortType('album')}
        />
        <Menu.Item header>&ensp;Search</Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' value={this.props.sortSearchText} onChange={(e) => this.props.updateSortSearchText(e.target.value)}/>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  sortType: state.sortType,
  sortSearchText: state.sortSearchText
})

const mapDispatchToProps = dispatch => {
  return {
    updateSortType: (choice) => dispatch(updateSortType(choice)),
    updateSortSearchText: (text) => dispatch(updateSortSearchText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsSortMenu)
