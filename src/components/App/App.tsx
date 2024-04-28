import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
