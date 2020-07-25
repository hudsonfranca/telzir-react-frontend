import React from 'react';

import { Container } from './styles';

export interface Props {
  open: boolean;
  onClick: () => any;
}

const HamburguerButton: React.FC<Props> = ({ open, onClick }) => {
  return (
    <Container
      data-test="hamburguerButtonContainer"
      open={open}
      onClick={onClick}
    >
      <div data-test="hamburguerLine" />
      <div data-test="hamburguerLine" />
      <div data-test="hamburguerLine" />
    </Container>
  );
};

export default HamburguerButton;
