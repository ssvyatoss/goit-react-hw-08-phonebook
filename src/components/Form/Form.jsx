import { useCallback } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onSubmit({ name, number });
      setName('');
      setNumber('');
    },
    [onSubmit, name, number]
  );
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

Form.propTypes = {
  onSubmit: PropTypes.func,
};