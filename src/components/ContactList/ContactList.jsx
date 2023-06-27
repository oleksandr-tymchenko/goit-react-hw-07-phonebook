import PropTypes from 'prop-types';
import { ContactsCont } from './ContactListStyled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const filterValue = useSelector(getFilterValue);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filterValue.toLowerCase();

  //   return items.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const visibleContacts = getVisibleContacts();
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
      {items && (
        <ContactsCont>
          {items.map(item => {
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
