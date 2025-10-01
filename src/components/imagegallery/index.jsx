import React, { useState, useEffect } from 'react';

// 相册组件
const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery-container">
      <h4>{title}</h4>
      <div className="gallery-wrapper">
        <div className="gallery-btn prev-btn" onClick={prevImage} disabled={images.length <= 1}>
          ‹
        </div>
        <div className="gallery-image">
          {images[currentIndex]?.src ? (
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
              className="gallery-img"
            />
          ) : (
          <div className="image-placeholder">
            <span>{images[currentIndex]?.icon || '📷'}</span>
          </div>
          )}
          <div className="image-caption">
            {images[currentIndex]?.caption || images[currentIndex]?.alt || `Image ${currentIndex + 1}`}
          </div>
        </div>
        <div className="gallery-btn next-btn" onClick={nextImage} disabled={images.length <= 1}>
          ›
        </div>
      </div>
      {images.length > 1 && (
        <div className="gallery-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default ImageGallery;