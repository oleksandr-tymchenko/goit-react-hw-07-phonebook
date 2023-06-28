import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';
import { contactsInitialState } from './inital';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunksArr = [addContactThunk, deleteContactThunk, getContactsThunk];
const helpFn = type => thunksArr.map(el => el[type]);
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  // state.items = state.items.push(payload);
  state.items.push(payload);
};
const handleFulfilledDel = (state, { payload }) => {
  console.log(payload);
  state.items = state.items.filter(el => el.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)

      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)

      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)

      .addMatcher(isAnyOf(...helpFn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...helpFn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...helpFn(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsInitialState = { items: [], status: 'idle', error: null };

// const defaultStatus = {
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,

//   extraReducers: builder => {
//     const { PENDING, FULFILLED, REJECTED } = STATUS;
//     builder
//       // .addCase(getContactsThunk.pending, handlePending)
//       .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
//       // .addCase(getContactsThunk.rejected, handleRejected)

//       // .addCase(addContactThunk.pending, handlePending)
//       .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
//       // .addCase(addContactThunk.rejected, handleRejected)
//       // .addCase(deleteContactThunk.pending, handlePending)
//       .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
//       // .addCase(deleteContactThunk.rejected, handleRejected)
//       .addMatcher(
//         isAnyOf(
//           ...helpFn(PENDING)
//           // getContactsThunk.pending,
//           // addContactThunk.pending,
//           // deleteContactThunk.pending
//         ),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(
//           ...helpFn(REJECTED)
//           // getContactsThunk.rejected,
//           // addContactThunk.rejected,
//           // deleteContactThunk.rejected
//         ),
//         handleRejected
//       )
//       .addMatcher(
//         isAnyOf(
//           ...helpFn(FULFILLED)
//           // getContactsThunk.fulfilled,
//           // addContactThunk.fulfilled,
//           // deleteContactThunk.fulfilled
//         ),
//         handleFulfilled
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.items = [...state.items, action.payload];
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
