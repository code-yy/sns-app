import { layout } from './styles.css';
import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html>
      <head />
      <body className={layout}>{children}</body>
    </html>
  );
};

export default RootLayout;
