import styled from "styled-components";
import { responsive } from "./breakpoints";
import * as svar from './variables.styles';

export const Resume = styled.div`
   max-width: 100rem;
   margin: 0 auto;
   display: flex;
   background-color: ${svar.clrNeutralMax};

   ${responsive.tb`
      max-width: 100%;
   `};
`