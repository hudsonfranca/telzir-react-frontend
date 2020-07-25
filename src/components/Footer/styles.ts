import styled from 'styled-components';

const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;

  small {
    color: var(--white);
    font-size: 1.6rem;
  }

  &::before {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    background-image: linear-gradient(
      to right,
      var(--primary),
      var(--quaternary),
      var(--quaternary),
      var(--primary)
    );
  }

  @media (max-width: 736px) {
    ul {
      flex-direction: column;
    }
  }
`;

export default Container;
