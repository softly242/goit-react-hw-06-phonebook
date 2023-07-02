import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/contacts/contactsSlice';
import { useMemo } from 'react';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, contacts]
  );

  const handleRemove = id => dispatch(remove(id));

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.info}>
            <span className={css.name}>
              {name} : {number}
            </span>
          </div>
          <button
            className={css.button}
            type="button"
            name="delte"
            onClick={() => handleRemove(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
