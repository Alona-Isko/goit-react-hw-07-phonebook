import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as actions from './contacts-actions';


axios.defaults.baseURL = 'https://61a8ad8333e9df0017ea3a3c.mockapi.io';

//
// export const fetchContacts = () => dispatch => {
//     dispatch(fetchContactsRequest());

//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//         .catch(error => dispatch(fetchContactsError(error)));
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
      const { data } = await axios.get('/contacts');
      return data;
  }
)

// async func
// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());

//     try {
//         const {data} = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactsError(error));
//     }
// };

export const addContact = text => dispatch => {
    const contact = {
        text,
        completed: false
    };

    dispatch(actions.addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data))
        .catch(error => dispatch(actions.addContactError(error))));
};

export const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)));
}