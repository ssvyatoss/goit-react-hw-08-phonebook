import { Button } from 'pages/Pages.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setContactThunk } from 'redux/contacts/thunks';
import { StyledForm } from './FormStyled';

export const Form = () => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
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
    dispatch(setContactThunk({name, number}))
    .unwrap()
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>

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
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};
