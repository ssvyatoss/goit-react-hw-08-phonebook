import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { FilterStyledContainer } from './FilterStyled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FilterStyledContainer>
      <h3>Find contacts by name</h3>
      <input type="text" onChange={handleChange} />
    </FilterStyledContainer>
  );
};
