import React, { Fragment } from 'react';
import { addCSSClassName } from '../../assets/ts/generalFunctions';
import scss from './Button.module.scss';

type Props = {
  className?: string;
  full?: boolean;
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = props => {
  const { className, full, children, type, onClick } = props;

  const btnStyle = addCSSClassName(scss, `btn--${full ? 'full' : 'outline'}`);

  const finalClassName = `${addCSSClassName(
    scss,
    'btn',
    btnStyle,
    className ? className + '' : ''
  )} `;

  return (
    <button className={finalClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
