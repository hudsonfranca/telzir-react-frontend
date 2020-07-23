import React from 'react';

import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/Logo1.0.png';
import Home from '../../assets/home.jpg';

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <img src={Logo} alt="Logo" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
