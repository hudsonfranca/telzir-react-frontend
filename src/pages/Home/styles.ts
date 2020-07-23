import styled from 'styled-components';

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
  }

  p {
    font-size: 2rem;
    width: 50%;
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
  height: 100vh;
  background-color: var(--quinary);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Card = styled.div`
  width: 100%;
  height: 80%;
  background-color: var(--tertiary);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  img {
    width: 100px;
    height: 260px;
  }
`;

export const Title = styled.p`
  color: var(--white);
  font-size: 4rem;
  height: 50px;
  margin-bottom: 30px;
`;

export const Plans = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.p`
  color: var(--primary);
  font-size: 4rem;
  height: 50px;
  margin-bottom: 30px;
`;

export const CardBody = styled.p`
  color: var(--primary);
  font-size: 2rem;
  height: 50px;
  margin-bottom: 30px;
`;

export const SectionThree = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--secondary);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
