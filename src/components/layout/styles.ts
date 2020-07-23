import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 200px;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

export default Grid;

// 'header'
// 'main'
// 'about'
// 'Service'
// 'contact';
