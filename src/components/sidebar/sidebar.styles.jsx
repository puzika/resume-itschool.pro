import styled from "styled-components";
import { responsive } from "../../breakpoints";
import * as svar from '../../variables.styles';

export const Sidebar = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4rem;
   width: 30%;
   background-color: ${svar.clrPrimary};
   color: ${svar.clrNeutralMax};
   padding: 4rem;

   ${responsive.tbmin`
      width: 40%;
      padding: 2rem;
   `};

   ${responsive.mb`
      width: 45%;
   `}
`