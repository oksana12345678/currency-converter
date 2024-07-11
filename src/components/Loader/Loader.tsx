import { DotLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.backdrop}>
      <DotLoader color="#36bed6" />
    </div>
  );
};
export default Loader;
