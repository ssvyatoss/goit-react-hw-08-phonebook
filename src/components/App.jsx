import React, { useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StyledGlobal } from 'GlobalStyle';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/thunks';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch])
  return (
    <StyledGlobal>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </StyledGlobal>
  );
};
