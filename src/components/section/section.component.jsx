import Subheading from '../subheading/subheading.component';
import * as S from './section.styles';

export default function Section({title, children}) {
   return (
      <S.Item>
         <Subheading value={title} />
         {children}
      </S.Item>
   )
}