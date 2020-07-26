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

export const Section = styled.div<{ bgColor: string }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    height: 100%;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 5rem;
      margin-bottom: 50px;
      text-align: left;
    }

    h2 {
      font-size: 2rem;
      text-align: left;
    }
  }
`;

export const Image = styled.div<{ bgUrl: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(11, 12, 16, 0.6);
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;
