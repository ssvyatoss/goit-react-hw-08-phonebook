import React from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StyledGlobal } from 'GlobalStyle';

export const App = () => {

  return (
    <StyledGlobal>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter name="filter"/>
      <ContactsList />
    </StyledGlobal>
  );
};
