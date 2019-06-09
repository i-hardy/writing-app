import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  0%{background-position:0% 51%}
  50%{background-position:100% 50%}
  100%{background-position:0% 51%}
`;

const Header = styled.header`
  grid-area: header;
  background: linear-gradient(to right, var(--imperial-blue), var(--giants-orange));
  background-size: 175% 175%;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  animation: ${animation} 20s ease infinite;
`;

export default Header;
