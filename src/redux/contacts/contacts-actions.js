// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');


// export const addContact = createAction('contacts/add', (name, number) => {
//     return {
//         payload: {
//             id: shortid.generate(),
//             name,
//             number,
//             completed: false,
//         },
//     }
// });

export const changeFilter = createAction('contacts/filter');
export const deleteContact = createAction('contacts/delete');
