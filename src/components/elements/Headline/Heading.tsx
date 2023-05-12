import { heading } from './styles.css';
import type { FC, HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLHeadingElement>;

const Heading1: FC<Props> = ({ children, ...rest }) => {
  return (
    <h1 className={heading} {...rest}>
      {children}
    </h1>
  );
};

const Heading2: FC<Props> = ({ children, ...rest }) => {
  return (
    <h2 className={heading} {...rest}>
      {children}
    </h2>
  );
};

const Heading3: FC<Props> = ({ children, ...rest }) => {
  return (
    <h3 className={heading} {...rest}>
      {children}
    </h3>
  );
};

const Heading4: FC<Props> = ({ children, ...rest }) => {
  return (
    <h4 className={heading} {...rest}>
      {children}
    </h4>
  );
};

export { Heading1, Heading2, Heading3, Heading4 };
