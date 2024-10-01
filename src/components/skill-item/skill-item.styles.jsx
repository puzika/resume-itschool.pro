import * as svar from '../../variables.styles';
import styled from "styled-components";

export const SkillName = styled.p`
   margin-bottom: .5rem;
`;

export const SkillBar = styled.div`
   height: 1rem;
   background-image: linear-gradient(
      to right,
      ${svar.clrSecondary} ${({$level}) => $level}%,
      ${svar.clrNeutralMax} ${({$level}) => $level}% 100%
   );
`;