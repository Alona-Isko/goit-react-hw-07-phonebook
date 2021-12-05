import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as operations from './contacts-operations';
import { changeFilter } from './contacts-actions';


const items = createReducer([], {
    [operations.fetchContacts.fulfilled]: (_, {payload}) => payload,
    [operations.addContact.fulfilled]: (state, { payload }) => [...state, payload],
       
    [operations.deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
    [operations.fetchContacts.pending]: () => true,
    [operations.fetchContacts.fulfilled]: () => false,
    [operations.fetchContacts.rejected]: () => false,

    [operations.addContact.pending]: () => true,
    [operations.addContact.fulfilled]: () => false,
    [operations.addContact.rejected]: () => false,

    [operations.deleteContact.pending]: () => true,
    [operations.deleteContact.fulfilled]: () => false,
    [operations.deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});

    


//
// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
//     changeFilter,
//     fetchContactsRequest,
//     fetchContactsSuccess,
//     fetchContactsError,
// } from './contacts-actions';


// const items = createReducer([], {
//     [fetchContactsSuccess]: (_, {payload}) => payload,
//     [addContactSuccess]: (state, { payload }) => [...state, payload],
       
//     [deleteContactSuccess]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });

// const loading = createReducer(false, {
//     [fetchContactsRequest]: () => true,
//     [fetchContactsSuccess]: () => false,
//     [fetchContactsError]: () => false,

//     [addContactRequest]: () => true,
//     [addContactSuccess]: () => false,
//     [addContactError]: () => false,

//     [deleteContactRequest]: () => true,
//     [deleteContactSuccess]: () => false,
//     [deleteContactError]: () => false,
// });

// const filter = createReducer('', {
//     [changeFilter]: (_, {payload}) => payload,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//     items,
//     filter,
//     loading,
//     error,
// });
    