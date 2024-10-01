import * as S from './skill-item.styles';

export default function SkillItem({skillName, level}) {
   return (
      <div>
         <S.SkillName>{skillName}</S.SkillName>
         <S.SkillBar $level={level} />
      </div>
   )
}