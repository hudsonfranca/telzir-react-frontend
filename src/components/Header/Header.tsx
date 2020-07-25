import React from 'react';

import { Link } from 'react-router-dom';
import { Container, HamburguerContainer } from './styles';
import Logo from '../../assets/Logo1.0.png';
import { useSideDrawer } from '../context/SideDrawerContext';
import HamburguerButton from '../HamburguerButton/HamburguerButton';

const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useSideDrawer();
  return (
    <Container data-test="headerContainer">
      <ul data-test="headerList">
        <HamburguerContainer data-test="headerHbContainer">
          <HamburguerButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </HamburguerContainer>

        <img src={Logo} alt="Logo" data-test="headerLogo" />
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
