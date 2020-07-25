import styled from 'styled-components';

export const HamburguerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 60px;
  background: rgba(11, 12, 16, 0.5);
  position: fixed;
  z-index: 20;
  padding-left: 20px;
  padding-right: 20px;

  ul {
    width: 100%;
    height: 100%;
    font-size: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    img {
      cursor: pointer;
    }
    li {
      width: 100px;
      height: 100%;
      text-align: center;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      a {
        color: var(--white);
        transition: all 0.5s;
        :hover,
        :active {
          color: var(--quaternary);
        }
      }
    }
    @media (max-width: 550px) {
      justify-content: space-around;

      li {
        display: none;
      }
    }

    @media (min-width: 550px) {
      ${HamburguerContainer} {
        display: none;
      }
    }
  }
`;

export default Container;
