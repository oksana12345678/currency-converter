import { PropsWithChildren } from 'react';
import css from './GridItem.module.css';

export const GridItem: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};
