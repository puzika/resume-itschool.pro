import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as svar from '../../variables.styles';

export const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   align-items: center;
   background-color: ${svar.clrTertiary};
   padding: 2rem;
`;

export const TitleDivider = styled.div`
   width: 25%;
   height: .25rem;
   background-color: ${svar.clrNeutralMin};
`

export const TitleMain = styled.h1`
   font-size: 4rem;
   text-align: center;

   ${responsive.tbmin`
      font-size: 3rem;
   `};
`;

export const TitleSecondary = styled.h2`
   font-size: 2rem;
   font-weight: 500;
   color: ${svar.clrTertiaryDark};
`;
