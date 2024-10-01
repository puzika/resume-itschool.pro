import styled from "styled-components";

export const ContactsList = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

export const ContactsItem = styled.li`
   display: flex;
   align-items: center;
   gap: .5rem;
`;

export const ContactIcon = styled.img`
   height: 2rem;
`;

export const Contact = styled.span`
   overflow-wrap: anywhere;
`