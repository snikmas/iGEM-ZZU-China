import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// 相册组件
const ImageGallery = ({ images, title, autoPlayInterval = 1200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const galleryRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 监听组件是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && images.length > 1) {
            // 进入视口，开始自动播放
            setIsAutoPlaying(true);
          } else {
            // 离开视口，停止自动播放
            setIsAutoPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // 当看见组件50%部分时候触发
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, [images.length]);

  // 自动播放逻辑
  useEffect(() => {
    if (isAutoPlaying && images.length > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        nextImage();
      }, autoPlayInterval);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, images.length]);

  // 手动切换时暂停自动播放一段时间
  const handleManualChange = (action) => {
    setIsAutoPlaying(false);
    action();
    // 3秒后恢复自动播放
    setTimeout(() => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible && images.length > 1) {
          setIsAutoPlaying(true);
        }
      }
    }, 3000);
  };

  return (
    <div className="image-gallery-container" ref={galleryRef}>
      <h4>{title}</h4>
      <div className="gallery-wrapper">
        <div 
          className="gallery-btn prev-btn" 
          onClick={() => handleManualChange(prevImage)} 
          disabled={images.length <= 1}
        >
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
        <div 
          className="gallery-btn next-btn" 
          onClick={() => handleManualChange(nextImage)} 
          disabled={images.length <= 1}
        >
          ›
        </div>
      </div>
      {images.length > 1 && (
        <div className="gallery-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                handleManualChange(() => setCurrentIndex(index));
              }}
            >
            </div>
          ))}
        </div>
      )}
      {/* 自动播放状态指示器（可选） */}
      {isAutoPlaying && images.length > 1 && (
        <div className="autoplay-indicator">
          <span>⏸</span>
        </div>
      )}
    </div>
  );
};


export default ImageGallery;