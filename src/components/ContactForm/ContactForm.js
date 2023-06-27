import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import {  useState } from 'react';
import shortid from 'shortid';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value)
    } else {
      setNumber(value)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const regexNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (!regexNumber.test(number)) {
      alert('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');
      return;
    } else if (!regexName.test(name) || name.length < 2) {
      alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'. Minimum 2 letters");
      return;
    }
    onSubmit(name, number);
    setName('');
    setNumber('');
    /* this.setState({
      name: '',
      number: '',
    }); */
  };

  return (
    <form className={css.form}>
      <label htmlFor={nameInputId} className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberInputId} className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        className={css.button}
        type="submit"
        onClick={handleSubmit}
      >
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
/* export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const regexNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (!regexNumber.test(this.state.number)) {
      alert('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');
      return;
    } else if (!regexName.test(this.state.name) || this.state.name.length < 2) {
      alert("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'. Minimum 2 letters");
      return;
    }
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId} className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={css.button}
          type="submit"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
 */