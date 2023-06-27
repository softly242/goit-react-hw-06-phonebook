import Contacts from './Contacts/Contacts';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/contacts/contactsSlice';

export default function App() {
  /* const [contacts, setContacts] =
  useLocalStorage('contacts', [{ id: '1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: '2', name: 'Hermione Kline', number: '443-89-12' },
  { id: '3', name: 'Eden Clements', number: '645-17-79' },
    { id: '4', name: 'Annie Copeland', number: '227-91-26' }]); */
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    /* add(prev => [...prev, newContact]); */
    /* this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    })); */

    dispatch(add(newContact));
  };

  /*  const handleFilterChange = e => {
    setFilter(e.target.value);
    this.setState({ filter: e.target.value });
  }; */

  /* const handleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }; */

  /* const handleRemoveContact = contactId => {
    setContacts(prev => prev.filter(({ id }) => id !== contactId));
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== contactId),
      };
    });
    dispatch(remove(contactId ));
  }; */

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter
      /* value={filter}
          handleChangeFilter={handleFilterChange} */
      />
      <Contacts
      /*  contacts={handleFilter()}
          handleRemoveContact={handleRemoveContact} */
      />
    </div>
  );
}
/* class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: '2', name: 'Hermione Kline', number: '443-89-12' },
      { id: '3', name: 'Eden Clements', number: '645-17-79' },
      { id: '4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('mount')
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
   
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = (name, number) => {
    const isExist = this.state.contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    } 
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };
  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  removeContact = contactId => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleChangeFilter={this.handleFilterChange}
        />
        <Contacts
          contacts={this.handleFilter()}
          handleRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
 */
