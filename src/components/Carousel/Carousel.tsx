import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { NavLink } from 'react-router-dom';
import { cards } from './cards';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 3000);
  }, [index]);

  const count = (n: number, m: number) => {
    const result = n % m;
    return result >= 0 ? result : result + m;
  };

  return (
    <div className={styles.carouselWrapper} data-testid='carousel'>
      {cards.map((item, i) => {
        const indexLeft = count(index - 1, cards.length);
        const indexRight = count(index + 1, cards.length);
        let className;

        if (i === index) {
          className = styles.activePic;
        } else if (i === indexRight) {
          className = styles.rightPic;
        } else if (i === indexLeft) {
          className = styles.leftPic;
        } else className = 'card';

        return (
          <img
            key={item.id}
            className={className}
            src={item.image}
            alt='Some Picture'
          ></img>
        );
      })}
    </div>
  );
};

export default Carousel;
