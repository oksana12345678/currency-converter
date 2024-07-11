import { PropsWithChildren } from 'react';
import css from './Section.module.css';

const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};
export default Section;
