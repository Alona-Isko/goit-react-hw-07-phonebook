import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as operations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts, getLoading } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';


function ContactList() {
    const contacts = useSelector(getVisibleContacts);
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(operations.deleteContact(id));
    
    useEffect(() => {
        dispatch(operations.fetchContacts());
    }, [dispatch]);


    return (
        <>
            {isLoading && <h2>Loading...</h2>}
            {contacts.length > 0 && (
                <ul className={s.ContactList__container}>
                    {contacts.map(({ id, name, number }) => (
                        <li
                            className={s.ContactList__item}
                            key={id}>
                            <p className={s.ContactList__text}>{name}: {number}</p>
                            <button
                                className={s.ContactList__button}
                                onClick={() => onDeleteContact(id)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}     
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func,
};

export default ContactList;


// const getVisibleContacts = (allContacts, filter) => {

//     return allContacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
// };


// const mapStateToProps = ({contacts: {items, filter}}) => ({
//     contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);




//hooks
// import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import * as operations from '../../redux/contacts/contacts-operations';
// import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
// import s from './ContactList.module.css';


// function ContactList() {
//     const contacts = useSelector(getVisibleContacts);

//     const dispatch = useDispatch();
//     const onDeleteContact = id => dispatch(operations.deleteContact(id));
    
//     // componentDidMount() {
        
//     // }

//     return (
//         <ul className={s.ContactList__container}>
//             {contacts.map(({ id, name, number }) => (
//                 <li
//                     className={s.ContactList__item}
//                     key={id}>
//                     <p className={s.ContactList__text}>{name}: {number}</p>
//                     <button
//                         className={s.ContactList__button}
//                         onClick={() => onDeleteContact(id)}>
//                         X
//                     </button>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     onDeleteContact: PropTypes.func,
// }

// const mapDispatchToProps = dispatch => ({
//     fetchContacts: () => dispatch(operations.fetchContacts()),
// })

// export default connect(null, mapDispatchToProps)(ContactList);