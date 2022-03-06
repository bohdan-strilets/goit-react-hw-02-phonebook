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

export default Contact;
