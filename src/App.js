import Loader from './components/Loader';
import { Component } from 'react';
import './App.css';
import fetchImages from './services/images-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    modalImg: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query === this.state.query &&
      prevState.page === this.state.page
    ) {
      return;
    }
    this.setState({ isLoading: true });

    fetchImages(this.state)
      .then(res => {
        const images = [...this.state.images, ...res.hits];
        this.setState({ images });
        if (this.state.page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(res => {
        console.log(res);
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  openModal = modalImg => {
    this.setState({ showModal: true, modalImg });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  onSearchSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onBtnClickHandler = () => {
    const page = this.state.page + 1;
    this.setState({ page });
  };

  render() {
    const { images, isLoading, showModal, modalImg } = this.state;
    return (
      <div className="App">
        <ToastContainer autoClose={2000} />
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {images.length !== 0 && isLoading !== true && (
          <Button onMoreClick={this.onBtnClickHandler} />
        )}
        {showModal && (
          <Modal closeModal={this.closeModal} modalImg={modalImg} />
        )}
      </div>
    );
  }
}

export default App;
