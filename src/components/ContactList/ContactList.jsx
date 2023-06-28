import PropTypes from 'prop-types';
import { ContactsCont } from './ContactListStyled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import Contact from 'components/Contact/Contact';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/thunks';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.toLowerCase();

  const getVisibleContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1500} />
      {isLoading && <Loader />}
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
