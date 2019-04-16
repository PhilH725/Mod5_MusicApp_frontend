
import React, {Component} from 'react'
import {Form, Button, Segment} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

class SignupForm extends Component {

  state = {
    username: "",
    password: "",
    redirect: false
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
    		username: this.state.username,
    		password: this.state.password
    	})
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        this.setState({redirect: true})
      } else {
        window.alert('invalid username or password')
      }
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

  render() {
    return (
      <Segment>
        {this.renderRedirect()}
        <Form
          onSubmit={this.handleSubmit}
          size="mini"
          key="mini"
        >
            <Form.Input width={7}
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input width={7}
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          <Button inverted color="linkedin" type="submit">Create Account</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignupForm
