import { ChangeEvent } from 'react';
import { setFilter } from '../../reduxState/filterSlice';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={handleChange}
    />
  );
};
