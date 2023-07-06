import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from 'redux/contactsSlice';

export const Form = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      return alert(`Contact "${name}" already exists in the phonebook!`);
    }
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name <br />
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Number <br />
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};
