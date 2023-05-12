import { container } from './styles.css';
import type { ButtonHTMLAttributes, FC } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ className, ...rest }) => {
  return <button className={`${container} ${className}`} {...rest} />;
};
