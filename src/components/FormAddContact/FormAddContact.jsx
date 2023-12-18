import React, { Component } from 'react';
import { Form, Container, Label, Button, Input } from './FormAddContact.styled';

export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    // console.log(this.props);
    // console.log(this.state);
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };
  handleChangeContact = e => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    // console.log(this.props);
    const { name, number } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Contact Name:
            <Input
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChangeContact}
            />
          </Label>
          <Label>
            Phone number:
            <Input
              type="tel"
              name="number"
              required
              value={number}
              onChange={this.handleChangeContact}
            />
          </Label>
          <Button type="submit">Додати контакт</Button>
        </Form>
      </Container>
    );
  }
}
