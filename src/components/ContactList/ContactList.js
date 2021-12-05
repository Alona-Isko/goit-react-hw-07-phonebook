import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {operations, selectors} from '../../redux/contacts';
import s from './ContactList.module.css';


function ContactList() {
    const contacts = useSelector(selectors.getVisibleContacts);
    const isLoading = useSelector(selectors.getLoading);
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
                    {contacts.map(({ id, name, phone }) => (
                        <li
                            className={s.ContactList__item}
                            key={id}>
                            <p className={s.ContactList__text}>{name}: {phone}</p>
                            <button
                                type="button"
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

