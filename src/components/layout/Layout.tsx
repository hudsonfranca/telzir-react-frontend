import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Grid from './styles';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Routes from '../../Routes';
import Footer from '../Footer/Footer';
import SideDrawerProvider from '../context/SideDrawerContext';
import SideDrawer from '../SideDrawer/SideDrawer';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Grid data-test="layoutGrid">
        <SideDrawerProvider data-test="sidedrawerProvider">
          <Header data-test="header" />
          <SideDrawer data-test="sideDrawer" />
        </SideDrawerProvider>
        <Main data-test="main">
          <Routes data-test="routes" />
        </Main>
        <Footer data-test="footer" />
      </Grid>
    </BrowserRouter>
  );
};

export default Layout;
