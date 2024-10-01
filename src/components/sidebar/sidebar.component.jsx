import UserImage from '../user-image/user-image.component';
import Section from '../section/section.component';
import Contacts from '../contacts/contacts.component';
import Skills from '../skills/skills.component';
import * as S from './sidebar.styles';

const levels = {
   A: 100,
   B: 75,
   C: 50,
   D: 25,
   E: 0,
}

const skills = {
   'HTML & CSS': levels.A,
   'SCSS': levels.A,
   'Javascript': levels.A,
   'ReactJS': levels.B,
   'Redux': levels.B,
   'React Router': levels.B,
   'Git & GitHub': levels.C,
   'Firebase': levels.D,
}

const languages = {
   'Russian': levels.A,
   'Uzbek': levels.A,
   'English': levels.B,
   'German': levels.D,
}

export default function Sidebar() {
   return (
      <S.Sidebar>
         <UserImage />
         <Section title={'contacts'}><Contacts /></Section>
         <Section title={'skills'}><Skills skills={skills} /></Section>
         <Section title={'languages'}><Skills skills={languages} /></Section>
      </S.Sidebar>
   )
}