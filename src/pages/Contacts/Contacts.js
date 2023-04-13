import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactsBox, ListBox } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactsBox>
      <ContactForm />
      <ListBox>
        <Filter />
        <ContactList />
      </ListBox>
    </ContactsBox>
  );
};
export default Contacts;
