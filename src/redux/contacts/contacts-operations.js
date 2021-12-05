import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'


axios.defaults.baseURL = 'https://61a8ad8333e9df0017ea3a3c.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', {name, phone});
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (nameId, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/contacts/${nameId}`);
            return data.id;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);





// export const fetchContacts = () => dispatch => {
//     dispatch(fetchContactsRequest());

//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//         .catch(error => dispatch(fetchContactsError(error)));
// };



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