import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  fetchSearchContact,
} from 'Servises/operatons';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => await fetchContacts()
);
export const getSearchContactThunk = createAsyncThunk(
  'contacts/fetchSearchContact',
  async search => await fetchSearchContact(search)
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => await addContact(contact)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => await deleteContact(id)
);
