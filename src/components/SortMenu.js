
import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {updateSortType} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SortMenu extends Component {

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
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  sortType: state.sortType
})

const mapDispatchToProps = dispatch => {
  return {
    updateSortType: (choice) => dispatch(updateSortType(choice))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)
