import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #2F2E41;
    margin: 0;
    padding: 0px 180px 40px 180px;
    font-family: 'Open Sans', sans-serif;
    color: white;

    @media (max-width: 768px) {
      padding: 0px 0px 40px 0px;
    }
  }
`;
