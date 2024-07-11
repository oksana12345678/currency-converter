import { PropsWithChildren } from 'react';
import css from './Grid.module.css';

export const Grid: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};
