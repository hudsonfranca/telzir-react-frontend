import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Grid from './styles';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Routes from '../../Routes';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Grid>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </Grid>
    </BrowserRouter>
  );
};

export default Layout;
