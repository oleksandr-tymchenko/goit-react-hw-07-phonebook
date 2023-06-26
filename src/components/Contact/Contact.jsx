import { BtnDel, Name } from 'components/ContactList/ContactListStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import { Text } from './Contact.styled';
const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Text>
      <Name>{name}:</Name> {number}
      <BtnDel type="button" onClick={handleDelete}>
        Delete
      </BtnDel>
    </Text>
  );
};

export default Contact;
