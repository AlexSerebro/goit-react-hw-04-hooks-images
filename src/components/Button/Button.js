import PropTypes from 'prop-types';

function Button({ onMoreClick }) {
  return (
    <button className="Button" onClick={onMoreClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onMoreClick: PropTypes.func,
};

export default Button;
