// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6499f44479fbe9bcf84030e3.mockapi.io';
export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', { ...contact });

  return await response.data;
};

// const BASE_URL = 'https://6499f44479fbe9bcf84030e3.mockapi.io';
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = axios.get(`${BASE_URL}/contacts`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchSearchContact = createAsyncThunk(
//   'contacts/fetchSearchContact',
//   async (query, { rejectWithValue }) => {
//     try {
//       const response = axios.get(`/contacts?q=${query}`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const response = axios.post('/contacts', { contact });
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = axios.delete(`/contacts/${contactId}`);

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
