import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from 'redux/operations';

import {
  Item,
  SpanContact,
  NumberContact,
  Button,
} from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
  };

  return (
    <Item>
      <SpanContact>{contact.name}:</SpanContact>
      <NumberContact>{contact.number}</NumberContact>
      <Button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
