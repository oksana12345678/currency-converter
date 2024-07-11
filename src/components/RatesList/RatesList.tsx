import { Grid } from '../Grid/Grid';
import { GridItem } from '../GridItem/GridItem';
import styles from './RatesList.module.css';

interface Rate {
  key: string;
  value: number;
}
interface RatesListProps {
  rates: Rate[];
}

const RatesList: React.FC<RatesListProps> = ({ rates }) => {
  return (
    <Grid>
      {rates.map(({ key, value }) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
export default RatesList;
