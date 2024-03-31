import React from 'react';
import styles from './NotFound.module.scss';
// @ts-ignore
import goose from './video/dance.mp4';

const NotFound = () => {
  return (
    <div className={styles.notFound} data-testid='notfound'>
      <video autoPlay loop muted disableRemotePlayback>
        <source src={goose} type='video/mp4' />
      </video>
      <div>
        <h1 className={styles.messageTitle}> Page not Found </h1>
        <p className={styles.messageText}>All you need is Duck</p>
      </div>
      <div></div>
      <p className={styles.messageText}>All you need is Duck</p>
    </div>
  );
};

export default NotFound;
