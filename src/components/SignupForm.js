
import React, {Component} from 'react'
import {Form, Button, Segment} from 'semantic-ui-react'

class SignupForm extends Component {

  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Segment>
        <Form
          onSubmit={null}
          size="mini"
          key="mini"
        >
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Create Account</Button>
        </Form>
      </Segment>
    )
  }
}

export default SignupForm
