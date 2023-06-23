import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StyledGlobal } from 'GlobalStyle';

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

  onSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`Contact "${name}" already exists in the phonebook!`);
    } else {
      const newContact = { id: crypto.randomUUID(), name, number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <StyledGlobal>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />
        <ContactsList contacts={this.filterContacts()} onDeleteContact={this.deleteContact}/>
      </StyledGlobal>
    );
  }
}
