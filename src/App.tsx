import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';

import { fetchBaseCurrency } from './reduxState/operations.js';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from './reduxState/currencySlice';
import Header from './components/Header/Header.js';
import Loader from './components/Loader/Loader.js';

const HomePage = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates.jsx'));

export const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos: GeolocationPosition) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
