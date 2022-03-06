import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div>
        <span>
          <FaUserAlt />
        </span>
        <p>{name}:</p>
      </div>
      <div>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(contactId)}>
          <FaTrash />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
