import { BtnDel, Name } from 'components/ContactList/ContactListStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlise';
import { Text } from './Contact.styled';
import { fetchContacts, getNews } from 'Servises/operatons';
const Contact = ({ contact }) => {
  const cont = async () => {
    const data = await fetchContacts();
    // const sdata = await getNews();
    console.log(data);
    // console.log(sdata);
  };

  cont();
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
