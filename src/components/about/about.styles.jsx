import styled from "styled-components";
import { responsive } from "../../breakpoints";

export const About = styled.div`
   padding: 4rem;
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 4rem;

   ${responsive.tbmin`
      padding: 2rem;
   `};
`;


export const ProjectTitle = styled.h4`
   margin-bottom: 1rem;
   font-size: 2rem;
`