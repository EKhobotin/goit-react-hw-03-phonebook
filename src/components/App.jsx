import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    if (this.state.contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
    // console.log(name);
  };

  getSearch = search => this.setState({ filter: search });

  getFilteredContacts = () =>
    this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );

  deleteContact = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));

  render() {
    // console.log(this.getFilteredContacts());
    return (
      <>
        <FormAddContact onSubmit={this.handleAddContact} />
        <Filter inputSearch={this.getSearch} value={this.state.filter} />
        <ContactsList
          contacts={this.getFilteredContacts()}
          delete={this.deleteContact}
        />
      </>
    );
  }
}
