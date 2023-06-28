export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter.filter;

// export const getContacts = state => {
//   console.log(state.contacts.items);
//   return [...state.contacts.items].filter(contact =>
//     contact.name.includes(state.filter.filter)
//   );
// };
