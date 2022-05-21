import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ tags, webformatURL, id, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            alt={tags}
            onModalClick={() => openModal(largeImageURL)}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
};

export default ImageGallery;
