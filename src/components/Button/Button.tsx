import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  nameBtn: string;
  onClickHandler: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        type='button'
        className={styles.btn}
        onClick={props.onClickHandler}
        data-testid='btn'
      >
        {props.nameBtn}
      </button>
    </div>
  );
};
export default Button;
