import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk, removeContactThunk, setContactThunk } from './thunks';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
    .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    })
    .addCase(getContactsThunk.rejected, (state, {payload}) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    })
    .addCase(getContactsThunk.pending, state => {
      state.contacts.isLoading = true;
    })
    
    .addCase(setContactThunk.fulfilled, (state, { payload }) => {
      state.contacts.items = [...state.contacts.items, payload];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    })
    .addCase(setContactThunk.rejected, (state, {payload}) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    })
    .addCase(setContactThunk.pending, state => {
      state.contacts.isLoading = true;
    })

    .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== payload.id);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    })
    .addCase(removeContactThunk.rejected, (state, {payload}) => {
      state.contacts.error = payload;
      state.contacts.isLoading = false;
    })
    .addCase(removeContactThunk.pending, state => {
      state.contacts.isLoading = true;
    })
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
