import shortid from 'shortid';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import {operations, selectors} from '../../redux/contacts';
import s from './ContactForm.module.css';


function ContactForm() {
    const items = useSelector(selectors.getContacts);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    let nameId = shortid.generate();
    let phoneId = shortid.generate();
    
    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'phone':
                setPhone(value);
                break;
            
            default:
                return;
        }
    };

    
    const handleSubmit = event => {
        event.preventDefault();

        const checkName = name =>
            items.find(
                contact => contact.name.toLowerCase() === name.toLowerCase());

        if (checkName(name)) {
            return alert(`${name} is already in contacts.`);
        } else {
            dispatch(operations.addContact({name, phone}));
        }
        reset();
    };

    const reset = () => {
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label
                className={s.form__title}
                htmlFor={nameId}
            >
                Name
            </label>
            <input
                type="text"
                className={s.form__input}
                name="name"
                id={nameId}
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                placeholder="Enter name"
                required
            />
                
            <label
                className={s.form__title}
                htmlFor={phoneId}
            >
                Number
            </label>
            <input
                type="tel"
                className={s.form__input}
                name="phone"
                id={phoneId}
                value={phone}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                placeholder="Enter phone number"
                required
            />
                
            <button
                className={s.form__button}
                type="submit"
            >
                Add contact
            </button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default ContactForm;



// const mapStateToProps = state => ({
//         items: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//         newContact: (name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
