
import { setFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

   const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="tel"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
}

