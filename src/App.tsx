// import { Contact } from './components/Contact/Contact.tsx';
// import { Experience } from './components/Experience/Experience.tsx';
import { Hero } from './components/Hero/Hero.tsx';
// import { RecentProject } from './components/RecentProject/RecentProject.tsx';
// import { Leadership } from './components/Leadership/Leadership.tsx';
import { Nav } from './components/Nav/Nav.tsx';
// import { Skills } from './components/Skills/Skills.tsx';
// import { Work } from './components/Work/Work.tsx';
import { useReveal } from './hooks/useReveal.ts';
import { useTheme } from './hooks/useTheme.ts';

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        {/* <RecentProject />
        <Work />
        <Experience />
        <Skills />
        <Leadership />
        <Contact /> */}
      </main>
    </>
  );
}
