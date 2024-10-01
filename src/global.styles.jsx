import { createGlobalStyle } from "styled-components";
import { responsive } from "./breakpoints";
import * as svar from './variables.styles';

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }

   html {
      font-size: 62.5%;
      box-sizing: border-box;

      ${responsive.tb`
         font-size: 55%;
      `};

      ${responsive.tbmin`
         font-size: 50%;
      `};

      ${responsive.mb`
         font-size: 45%;
      `}
   }

   body {
      font-size: 1.6rem;
      background-color: ${svar.clrSecondary};
   }
`