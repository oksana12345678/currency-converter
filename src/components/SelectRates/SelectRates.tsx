import { useDispatch } from 'react-redux';
import css from './SelectRates.module.css';
import Select, { SingleValue } from 'react-select';
import symbols from './symbols.json';
import { setBaseCurrency } from '../../reduxState/currencySlice';
import './ReactSelect.css';

interface SelectRatesProps {
  baseCurrency: string;
}
interface OptionType {
  label: string;
  value: string;
}

const SelectRates: React.FC<SelectRatesProps> = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
      dispatch(setBaseCurrency(selectedOption.value));
    }
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
export default SelectRates;
