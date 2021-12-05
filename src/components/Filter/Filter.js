import shortid from 'shortid';

import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, changeFilter } from "../../redux/contacts";
import s from './Filter.module.css';

let filterId = shortid.generate();

function Filter(){
    const value = useSelector(selectors.getFilter);

    const dispatch = useDispatch()
    

    return (
        <label htmlFor={filterId} className={s.Filter__text}>
            Find contacts by name
            <input
                type="text"
                className={s.Filter__input}
                value={value}
                id={filterId}
                onChange={ev => dispatch(changeFilter(ev.currentTarget.value))}
            />
        </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;




// const mapStateToProps = (state) => ({
//     value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//     onChange: (ev) => dispatch(changeFilter(ev.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);