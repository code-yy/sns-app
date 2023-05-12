import { text } from './styles.css';
import type { FC, HTMLAttributes } from 'react';

type Props = {
  message: string | undefined;
} & HTMLAttributes<HTMLParagraphElement>;

export const ErrorMessage: FC<Props> = ({ message, ...rest }) => {
  return (
    <p className={text} {...rest}>
      {message}
    </p>
  );
};
