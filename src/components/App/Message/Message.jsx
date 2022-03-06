import PropTypes from 'prop-types';

function Message({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

Message.prototype = {
  text: PropTypes.string.isRequired,
};

export default Message;
