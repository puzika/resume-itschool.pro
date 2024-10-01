import * as S from './title.styles';

export default function Title({name, job}) {
   return (
      <S.TitleContainer>
         <S.TitleMain>{name}</S.TitleMain>
         <S.TitleDivider />
         <S.TitleSecondary>{job}</S.TitleSecondary>
      </S.TitleContainer>
   )
}