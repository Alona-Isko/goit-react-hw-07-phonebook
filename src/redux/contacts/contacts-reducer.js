import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContact,
    changeFilter,
} from './contacts-actions';
import contactsItems from '../../contacts.json';


const itemsReducer = createReducer(contactsItems, {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
       
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
});
    