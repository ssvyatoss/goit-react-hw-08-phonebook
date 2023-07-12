import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" onChange={handleChange} />
    </label>
  );
};
