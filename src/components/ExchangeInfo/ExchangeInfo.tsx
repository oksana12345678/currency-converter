import css from './ExchangeInfo.module.css';

interface ExchangeInfoProps {
  amount: number;
  from: string;
  to: string;
  rate: number;
  result: number;
}

const ExchangeInfo: React.FC<ExchangeInfoProps> = ({
  amount,
  from,
  to,
  rate,
  result,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <p className={css.details}>
          <span className={css.accent}>{amount} </span>
          <span className={css.accent}>{from} </span>
          in <span className={css.accent}>{to}</span>
        </p>

        <p className={css.details}>
          at the rate of
          <span className={css.accent}> {rate}</span>
        </p>

        <p className={css.title}>
          {result.toFixed(2)} {to}
        </p>
      </div>
    </div>
  );
};
export default ExchangeInfo;
