import { ContactsPageContainer } from 'Styles/ContactsPageStyled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { getContactsThunk } from 'redux/contacts/thunks';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  },[dispatch])

  return (
    <ContactsPageContainer>
      <h2>Contacts</h2>
      <Form />
      <Filter />
      <ContactsList contacts={contacts} />
    </ContactsPageContainer>
  );
};


