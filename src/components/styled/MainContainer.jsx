import styled from '@emotion/styled';

const MainContainer = styled.section`
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-areas: 'header header' 'sidebar editor';
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 50px 1fr;
`;

export default MainContainer;
