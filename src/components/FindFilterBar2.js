
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeSearchText, changeSearchType, queryLastFM} from '../redux/actionCreators'
import {Menu, Dropdown, Input, Button, Form} from 'semantic-ui-react'

// <select onChange={(e)=>this.props.changeSearchType(e.target.value)} value={this.props.searchType}>
//   <option value="songs">Songs</option>
//   <option value="artists">Artists</option>
//   <option value="albums">Albums</option>
// </select>

// <Input value={this.props.searchVal}
//        onChange={(e) => {this.props.changeSearchText(e.target.value)}} placeholder="search"
//        className='icon' icon='search'
//        />

// <Dropdown item text="filter">
//   <Dropdown.Menu>
//     <Dropdown.Item value="songs">Songs</Dropdown.Item>
//     <Dropdown.Item value="artists">Artists</Dropdown.Item>
//     <Dropdown.Item value="albums">Albums</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>

// <Menu>
//   <Menu.Item>
//     <Input action={{ type: 'submit', content: 'Go' }} value={this.props.searchVal}
//            onChange={(e) => {this.props.changeSearchText(e.target.value)}} placeholder="search"
//            onSubmit={() => this.props.queryLastFM(this.props.searchVal, this.props.searchType)}
// />
//   </Menu.Item>
//   <Menu.Item>
//     <Button onClick={() => this.props.queryLastFM(this.props.searchVal, this.props.searchType)}>Submit</Button>
//   </Menu.Item>
//   <Menu.Item>
//     Search:
//     <Button.Group>
//       <Button value="songs">Songs</Button>
//       <Button value="artists">Artists</Button>
//       <Button value="albums">Albums</Button>
//     </Button.Group>
//   </Menu.Item>
// </Menu>

const options = [
  { key: 's', text: 'Songs', value: 'songs'},
  { key: 'a', text: 'Artists', value: 'artists'},
  { key: 'l', text: 'Albums', value: 'albums'},
]

class FindFilterBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
      searchFilter: 'songs'
    }
  }

  handleChange = (e) => {
    this.setState({searchText: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.queryLastFM(this.state.searchText, this.props.searchFilter)
  }

  handleChange = (e, { value }) => this.setState({ searchFilter: value })

  render() {
    const { value } = this.state.searchFilter
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Search</label>
          <input placeholder="search" onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit">Submit</Button>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Songs'
            value='songs'
            checked={value === 'songs'}
            onChange={this.handleRadio}
          />
          <Form.Radio
            label='Artists'
            value='artists'
            checked={value === 'artists'}
            onChange={this.handleRadio}
          />
          <Form.Radio
            label='Albums'
            value='albums'
            checked={value === 'albums'}
            onChange={this.handleRadio}
          />
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchText,
  searchType: state.searchType
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: text => dispatch(changeSearchText(text)),
    changeSearchType: type => dispatch(changeSearchType(type)),
    queryLastFM: (searchVal, searchType) => dispatch(queryLastFM(searchVal, searchType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFilterBar)
