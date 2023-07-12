import React from 'react';
import { useDispatch } from 'react-redux';
import { setContactThunk } from 'redux/thunks';

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
