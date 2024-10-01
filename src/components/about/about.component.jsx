import Title from '../title/title.component';
import Section from '../section/section.component';
import * as S from './about.styles';

export default function About() {
   return (
      <S.About>
         <Title name={'Tolibjon Latipov Komilovich'} job={'Frontend Developer'} />
         <Section title={'Summary'}>
            <p>
               I'm a passionate frontend developer, eager to learn and improve. I love challenging problems and the thrill that comes from overcoming them. Unfortunately, I don't have any experience in the industry yet. I hope that joining itschool.pro will not only help me improve my frontend skills even further, but also gain the experience necessary to succeed in today's rather competitive job market. 
            </p>
         </Section>
         <Section title={'Education'}>
            <p>BSc computer science (2021 - 2025)</p>
            <p>National Research Tomsk State University</p>
            <p>Currently, I'm in my 4th year of college</p>
         </Section>
         <Section title={'Projects'}>
            <div>
               <S.ProjectTitle>Online multiplayer chess site</S.ProjectTitle>
               <p>
                  This project was built using the following tools: HTML, SCSS, JS, ExpressJS, Socket.io. The application allows users to play chess with their friends by sharing an invite link.
               </p>
            </div>
            <div>
               <S.ProjectTitle>AlgoVis</S.ProjectTitle>
               <p>
                  This project was built using the following tools: Vite, ReactJS, React Router, Context API, Canvas API, Styled Components. The application allows users to visualize different sorting (merge sort, quick sort, heap sort, bubble sort, selection sort) and pathfinding (Breadth-first search, Dijkstra's algorithm and A*) algorithms.
               </p>
            </div>
         </Section>
         <Section title={'Source'}>
            I found out about itschool.pro from a friend of mine, who was doing an internship there at the time.
         </Section>
      </S.About>
   )
}