import { useDispatch } from 'react-redux';
import css from './SelectRates.module.css';
import Select from 'react-select';
import symbols from './symbols.json';

const SelectRates: React.FC = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };
  return (
    <div className={css.box}>
      <p className={css.text}>Your base currency:&nbsp;</p>
      <Select
        className={css.select}
        classNamePrefix="react-select"
        isSearchable
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        onChange={handleChange}
      />
    </div>
  );
};
