import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'components/Requests/Api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const setContactThunk = createAsyncThunk(
  'contacts/addContact',
  async(contact, { rejectWithValue }) => {
    try {
        const res = await addContact(contact);
        return res;
    } catch (err) {
        return rejectWithValue(err.message);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async(id, {rejectWithValue}) => {
        try {
            const {data} = await deleteContact(id);
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)
