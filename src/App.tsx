import React from 'react';
import Layout from './components/layout/Layout';
import { GlobalStyle, ResetStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
