import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import css from './ExchangeForm.module.css';
import { MdCurrencyExchange } from 'react-icons/md';
import { fetchExchangeCurrency } from '../../reduxState/operations';
interface FormValues {
  currency: string;
}

const initialValues: FormValues = { currency: '' };
const validationSchema = Yup.object({
  currency: Yup.string()

    .matches(
      /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/,
      'Invalid format. Example: "15 USD in UAH"',
    )
    .required('Required'),
});

const ExchangeForm: React.FC = () => {
  const dispatch = useDispatch();
  const inputID = useId();

  const handleSubmit = (values: FormValues) => {
    const [amount, form, , to] = values.currency.split(' ');
    dispatch(fetchExchangeCurrency({ amount, form, to }));
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={inputID}>
          Enter currency{' '}
        </label>
        <button className={css.button} type="submit">
          <MdCurrencyExchange className={css.icon} />
          <span className={css.visuallyHidden}>Submit</span>
        </button>
        <Field
          className={css.input}
          title="Request format 15 USD in UAH"
          name="currency"
          id={inputID}
          placeholder="15 USD in UAH"
        />
        <ErrorMessage className={css.error} name="currency" component="span" />
      </Form>
    </Formik>
  );
};

export default ExchangeForm;
