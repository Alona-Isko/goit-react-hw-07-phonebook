import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './contacts-actions';


axios.defaults.baseURL = 'https://61a8ad8333e9df0017ea3a3c.mockapi.io';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error)));
};

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

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data))
        .catch(error => dispatch(addContactError(error))));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
}