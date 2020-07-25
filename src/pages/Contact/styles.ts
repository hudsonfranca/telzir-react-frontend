import styled from 'styled-components';

interface CardProps {
  bgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const SectionOne = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);

  h1 {
    font-size: 4rem;
    padding-bottom: 20px;
    width: 80%;
    text-align: center;
  }

  p {
    font-size: 2rem;
    width: 80%;
    text-align: center;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(11, 12, 16, 0.5);
    position: absolute;
    top: 0;

    z-index: -1;
  }
`;

export const SectionTwo = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--secondary);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ bgUrl }) => bgUrl});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  cursor: pointer;

  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      100deg,
      var(--primary),
      rgba(31, 40, 51, 0.1)
    );

    position: absolute;
    top: 0;
    z-index: -1;
  }
`;

export const CardTitle = styled.p`
  font-size: 3rem;
  padding: 20px;
`;

export const CardBody = styled.p`
  font-size: 2rem;
  padding: 20px;
`;
