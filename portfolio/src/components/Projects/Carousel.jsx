import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from './Carousel.module.css';

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.arrowLeft} onClick={prevSlide}>
        <BsArrowLeftCircleFill className={styles.arrowIcon} />
      </div>
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? styles.slide : styles.slideHidden}
        />
      ))}
      <div className={styles.arrowRight} onClick={nextSlide}>
        <BsArrowRightCircleFill className={styles.arrowIcon} />
      </div>
    </div>
  );
  
};
