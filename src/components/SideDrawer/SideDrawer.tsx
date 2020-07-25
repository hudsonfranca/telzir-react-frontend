import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useSideDrawer } from '../context/SideDrawerContext';
import HamburguerButton from '../HamburguerButton/HamburguerButton';

const SideDrawer: React.FC = () => {
  const { isOpen, setIsOpen } = useSideDrawer();
  return (
    <Container isOpen={isOpen} data-test="sidedrawerContainer">
      <HamburguerButton
        onClick={() => setIsOpen(!isOpen)}
        open={isOpen}
        data-test="hamburguer-button"
      />

      <ul data-test="menu">
        <li>
          <Link to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideDrawer;
