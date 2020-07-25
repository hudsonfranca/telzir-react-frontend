import React from 'react';

import Container from './styles';
import Logo from '../../assets/Logo1.0.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <Container data-test="container">
      <img src={Logo} alt="Logo" />

      <small>
        &copy;
        {`Telzir ${currentYear}  All rights reserved.`}
      </small>
    </Container>
  );
};

export default Footer;
