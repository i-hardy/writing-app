import { css } from '@emotion/core';

const globalStyles = css`
  html {
    overflow: hidden;
    --giants-orange: rgba(245, 98, 23, 1);
    --wheat: rgba(232, 218, 178, 1);
    --imperial-blue: rgba(11, 72, 107, 1);
    --columbia-blue: rgba(192, 214, 223, 1);
    --isabelline: rgba(234, 234, 234, 1);
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  #root {
    height: 100%;
    display: flex;
  }

  body {
    margin: 0;
    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  }
`;

export default globalStyles;
