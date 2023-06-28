import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'Servises/operatons';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => addContact(contact)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)

  // (id, { rejectWithValue }) => {
  //   try {
  //     deleteContact(id);
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // }
);

// export const getContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   () => fetchContacts()

//   // async (_, { rejectWithValue }) => {
//   //   try {
//   //     await fetchContacts();
//   //   } catch (error) {
//   //     return rejectWithValue(error.message);
//   //   }
//   // }
// );
// export const getSearchContactThunk = createAsyncThunk(
//   'contacts/fetchSearchContact',
//   async search => await fetchSearchContact(search)
// );

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   contact => addContact(contact)

//   // async (contact, { rejectWithValue }) => {
//   //   try {
//   //     await addContact(contact);
//   //   } catch (error) {
//   //     return rejectWithValue(error.message);
//   //   }
//   // }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContact(id);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
