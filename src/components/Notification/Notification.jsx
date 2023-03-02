import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
