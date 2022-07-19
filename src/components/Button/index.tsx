import { ReactNode } from 'react';
import classNames from 'classnames';
import './Button.css';

type ButtonProps = {
  children: ReactNode | ReactNode[],
  onClick: () => void,
  className?: string,
}

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={classNames('Button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;