import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    tags: PropTypes.string,
    modalImg: PropTypes.string,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscPressHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPressHandle);
  }

  onBackdropClickHandle = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  onEscPressHandle = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { tags, modalImg } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.onBackdropClickHandle}>
        <div className="Modal">
          <img src={modalImg} alt={tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
