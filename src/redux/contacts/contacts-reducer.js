import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from './contacts-actions';
import contactsItems from '../../contacts.json';


const itemsReducer = createReducer(contactsItems, {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
       
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading: loadingReducer,
});
    