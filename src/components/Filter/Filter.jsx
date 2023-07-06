import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" onChange={e => dispatch(setFilter(e.target.value))} />
    </label>
  );
};
