import { BtnDel, Name } from 'components/ContactList/ContactListStyled';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlise';
import { Text } from './Contact.styled';
import { fetchContacts, getNews } from 'Servises/operatons';
import { deleteContactThunk } from 'redux/thunks';
const Contact = ({ contact }) => {
  // const cont = async () => {
  //   const data = await fetchContacts();
  //   // const sdata = await getNews();
  //   console.log(data);
  //   // console.log(sdata);
  // };

  // cont();

  const { id, name, phone } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
    <Text>
      <Name>{name}:</Name> {phone}
      <BtnDel type="button" onClick={handleDelete}>
        Delete
      </BtnDel>
    </Text>
  );
};

export default Contact;
