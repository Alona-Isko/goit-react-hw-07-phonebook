import axios from "axios";
import {
    addContactRequest,
    addContactSuccess,
    addContactError,} from './contacts-actions';


axios.defaults.baseURL = 'https://61a8ad8333e9df0017ea3a3c.mockapi.io';

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

