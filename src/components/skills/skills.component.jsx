import SkillItem from '../skill-item/skill-item.component';
import * as S from './skills.styles';

export default function Skills({skills}) {
   return (
      <S.SkillsList>
         {
            [...Object.entries(skills)].map(([skill, level]) => (
               <SkillItem key={crypto.randomUUID()} skillName={skill} level={level} />
            ))
         }
      </S.SkillsList>
   )
}