import PropTypes from 'prop-types';
import { ContactsCont } from './ContactListStyled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';

export default function ContactList() {
  // const { items, isLoading, error } = useSelector(getContacts);
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.toLowerCase();
  console.log('items', Array.isArray(items) ? items : []);

  const getVisibleContacts = () => {
    // const normalizedFilter = filterValue.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  // const visibleContacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  //   return (
  //     <ContactsCont>
  //       {visibleContacts.map(contact => {
  //         return (
  //           <li key={contact.id}>
  //             <Contact contact={contact} />
  //           </li>
  //         );
  //       })}
  //     </ContactsCont>
  //   );
  // }
  return (
    <>
      {isLoading && <>...loading</>}
      {Array.isArray(visibleContacts) && (
        <ContactsCont>
          {visibleContacts.map(item => {
            return (
              <li key={item.id}>
                <Contact contact={item} />
              </li>
            );
          })}
        </ContactsCont>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
