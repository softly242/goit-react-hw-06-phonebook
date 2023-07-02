import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: 
    {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', url: '' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', url: '' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79', url: '' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', url: '' },
      ],
    },

  reducers: {
    add: (state, action) => {
      /* state.push(action.payload); */
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
