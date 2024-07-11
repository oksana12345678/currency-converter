import { PropsWithChildren } from 'react';
import css from './Container.module.css';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
export default Container;
