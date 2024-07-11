import { MdCurrencyExchange } from 'react-icons/md';
import { useSelector } from 'react-redux';
import css from './Header.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SelectRates } from '../SelectRates/SelectRates';
import { selectBaseCurrency } from 'reduxState/selertors';

const Header: React.FC = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <div>
          <MdCurrencyExchange className={css.logo} />
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {baseCurrency && <SelectRates baseCurrency={baseCurrency} />}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;
