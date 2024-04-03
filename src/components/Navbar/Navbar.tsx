import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={48} />
      {isOpen && (
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink className={styles.home} to='/' end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.categories} to='/categories' end>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.movieinder} to='/movieinder' end>
                Movieinder
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.sameFilm} to='/sameFilm' end>
                SameFilm
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.myMovie} to='/myMovie' end>
                MyMovie
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

// const iconPaths = {
//   open: '/icons/ham-menu-open.svg',
//   close: '/icons/ham-menu-close.svg',
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [icon, setIcon] = useState(iconPaths.open);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setIcon(isOpen ? iconPaths.open : iconPaths.close);
//   };

//   return (
//     <div className={styles.navbar}>
//       <button
//         className={`navbar-button ${isOpen ? 'open' : ''}`}
//         onClick={toggleMenu}
//       >
//         <img src={icon} alt='Hamburger Menu' />
//       </button>

//       {isOpen && (
//         <nav className={`menu ${isOpen ? 'open' : ''}`}>
//           <ul>
//             <li>
//               <NavLink className={styles.home} to='/search' end>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={styles.categories} to='/categories' end>
//                 Categories
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={styles.movieinder} to='/movieinder' end>
//                 Movieinder
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={styles.sameFilm} to='/sameFilm' end>
//                 SameFilm
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={styles.myMovie} to='/myMovie' end>
//                 MyMovie
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// const [isOpen, setIsOpen] = useState(false);

// const toggleMenu = () => {
//   setIsOpen(!isOpen);
// };

// return (
//   <div className={styles.navbar}>
//     <div class='burger'>
//       <input
//         type='checkbox'
//         class='menu-open'
//         name='menu-open'
//         id='menu-open'
//       />
//       <label class='patty' for='menu-open'>
//         <span class='hamburger'></span>
//       </label>
//     </div>

//     {isOpen && (
//       <nav className={`menu ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <NavLink className={styles.home} to='/search' end>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={styles.categories} to='/categories' end>
//               Categories
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={styles.movieinder} to='/movieinder' end>
//               Movieinder
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={styles.sameFilm} to='/sameFilm' end>
//               SameFilm
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={styles.myMovie} to='/myMovie' end>
//               MyMovie
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     )}
//   </div>
// );
