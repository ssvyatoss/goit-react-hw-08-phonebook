import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors'
import { removeContactThunk } from 'redux/contacts/thunks';
import { ContactsListButton, ContactsListItem, ContactsListStyled } from './ContactsListStyled';


export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(removeContactThunk
    (id));
  };

  return (
    <ContactsListStyled>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactsListButton onClick={() => handleDelete(contact.id)}>Delete</ContactsListButton>
        </ContactsListItem>
      ))}
    </ContactsListStyled>
  );
};
