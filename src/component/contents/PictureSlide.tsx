import React, { useState, useEffect, CSSProperties } from 'react';
import style from '../../style/contentStyle/PictureSlide.module.css';

type ImageWithDescription = {
  src: string;
  description: string;
};

type PictureSlideProps = {
  images: ImageWithDescription[];
  style?: CSSProperties; // Custom style for the images
};

const PictureSlide: React.FC<PictureSlideProps> = ({ images, style: customStyle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentSlide, images]);

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className={style.container}>
      <img
        src={images[currentSlide].src}
        alt=""
        style={customStyle} // Apply custom style here
      />
      <div className={style.selector}>
        {images[currentSlide] ? (
          <div className={style.description}>{images[currentSlide].description}</div>
        ) : null}
        <ul>
          <li className={style.pernextBtn} onClick={previousSlide}>
            &lt;
          </li>
          {images.map((_, index) => (
            <li
              key={index}
              className={index === currentSlide ? style.active : ''}
              onClick={() => changeSlide(index)}
            ></li>
          ))}
          <li className={style.pernextBtn} onClick={nextSlide}>
            &gt;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PictureSlide;
