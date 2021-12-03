import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContacts,
    addContact,
    deleteContact,
} from './contacts-operations';
import {changeFilter} from './contacts-actions';


const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, {payload}) => payload,
    [addContact.fulfilled]: (state, { payload }) =>
        [...state, payload],
       
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
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
    