import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Categories.module.scss';
import { Film } from '../../../types/interfaces';
import Snow from '../Snow/Snow';
import { genres } from '../../../types/types';

const Categories = () => {
  // const [movies, setMovies] = useState<Film[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.categoriesWrapper} data-testid='categories'>
      <Snow />

      {/* <div className={styles.blocksHolder}>
        {genres.map((genre, index) => (
          <NavLink key={index} to={`/categories/${genre.name.toLowerCase()}`}>
            <div
              className={`${styles.genreBlock} ${styles[`block${index + 1}`]}`}
              data-testid='genre'
            >
              <h1>{genre.name}</h1>
            </div>
          </NavLink>
        ))}
      </div> */}

      <div className={styles.blocksHolder}>
        <NavLink to={`/categories/28`}>
          <div
            key={28}
            className={`${styles.genreBlock} ${styles.block1}`}
            data-testid='genre'
          >
            <h1>Action</h1>
          </div>
        </NavLink>

        <NavLink to={`/categories/12`}>
          <div
            key={12}
            className={`${styles.genreBlock} ${styles.block2}`}
            data-testid='genre'
          >
            <h1>Adventure</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/35`}>
          <div
            key={35}
            className={`${styles.genreBlock} ${styles.block3}`}
            data-testid='genre'
          >
            <h1>Comedy</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/80`}>
          <div
            key={80}
            className={`${styles.genreBlock} ${styles.block4}`}
            data-testid='genre'
          >
            <h1>Crime</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/18`}>
          <div
            key={18}
            className={`${styles.genreBlock} ${styles.block5}`}
            data-testid='genre'
          >
            <h1>Drama</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/14`}>
          <div
            key={14}
            className={`${styles.genreBlock} ${styles.block6}`}
            data-testid='genre'
          >
            <h1>Fantasy</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/27`}>
          <div
            key={27}
            className={`${styles.genreBlock} ${styles.block7}`}
            data-testid='genre'
          >
            <h1>Horror</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/9648`}>
          <div
            key={9648}
            className={`${styles.genreBlock} ${styles.block8}`}
            data-testid='genre'
          >
            <h1>Mystery</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/10749`}>
          <div
            key={10749}
            className={`${styles.genreBlock} ${styles.block9}`}
            data-testid='genre'
          >
            <h1>Romance</h1>
          </div>
        </NavLink>
        <NavLink to={`/categories/53`}>
          <div
            key={53}
            className={`${styles.genreBlock} ${styles.block10}`}
            data-testid='genre'
          >
            <h1>Thriller</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;

// <div className={styles.blocksHolder}>
//   {genres.map((genre, index) => (
//     <NavLink key={index} to={`/categories/${genre.name.toLowerCase()}`}>
//       <div
//         className={`${styles.genreBlock} ${styles[`block${index + 1}`]}`}
//         data-testid='genre'
//       >
//         <h1>{genre.name}</h1>
//       </div>
//     </NavLink>
//   ))}
// </div>
