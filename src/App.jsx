import Sidebar from './components/sidebar/sidebar.component.jsx';
import About from './components/about/about.component.jsx';
import * as S from './App.styles.jsx';

export default function App() {
  return (
    <S.Resume>
      <Sidebar />
      <About />
    </S.Resume>
  )
}
