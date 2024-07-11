import css from './Heading.module.css';
import clsx from 'clsx';

interface HeadingProps {
  title: string;
  top: boolean;
  bottom: boolean;
  error: boolean;
  info: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  top,
  bottom,
  error,
  info,
}) => {
  return (
    <h2
      className={clsx(css.title, {
        [css.top]: top,
        [css.bottom]: bottom,
        [css.error]: error,
        [css.info]: info,
      })}
    >
      {title}
    </h2>
  );
};
