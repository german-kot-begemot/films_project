import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Carousel from '../Carousel/Carousel';
import imgleft from './imagesHome/penny_red.png';
import imgright from './imagesHome/penny_red2.png';

const Home = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 100) {
        setScrolled(window.scrollY);
        console.log(scrolled);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.homeMain} data-testid='home-main'>
      <div className={styles.homePreview} data-testid='home-preview'>
        <img
          src={imgleft}
          className={styles.imgleft}
          style={{
            width: 25 + scrolled * 0.1 + 'vw',
          }}
          alt='jacket'
        />
        <img
          src={imgright}
          className={styles.imgright}
          style={{
            width: 72 + scrolled * 0.1 + 'vw',
          }}
          alt='baloon'
        />
      </div>
      <div className={styles.homeCarusel} data-testid='carousel'>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
