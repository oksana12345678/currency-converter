import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from 'reduxState/selertors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';
import Heading from '../components/Heading/Heading';
import ExchangeInfo from '../components/ExchangeInfo/ExchangeInfo';
import Loader from '../components/Loader/Loader';

const Home: React.FC = () => {
  const exchangeInfo = useSelector(selectExchangeInfo);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!exchangeInfo && !isError && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
