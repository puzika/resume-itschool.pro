import EmailIcon from '../../assets/email.svg';
import PhoneIcon from '../../assets/phone.svg';
import TelegramIcon from '../../assets/telegram.svg';
import * as S from './contacts.styles';

const contacts = {
   email: 'tolibjonlatipovk@gmail.com',
   phone: '+7 (906) 951 02-38',
   telegram: 'https://t.me/cychvuviv',
}

export default function Contacts() {
   return (
      <S.ContactsList>
         <S.ContactsItem>
            <S.ContactIcon src={EmailIcon} />
            <S.Contact>{contacts.email}</S.Contact>
         </S.ContactsItem>

         <S.ContactsItem>
            <S.ContactIcon src={PhoneIcon} />
            <S.Contact>{contacts.phone}</S.Contact>
         </S.ContactsItem>

         <S.ContactsItem>
            <S.ContactIcon src={TelegramIcon} />
            <S.Contact>{contacts.telegram}</S.Contact>
         </S.ContactsItem>
      </S.ContactsList>
   )
}