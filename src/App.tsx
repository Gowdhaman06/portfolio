import { Suspense, lazy } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CustomCursor } from './components/layout/CustomCursor';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Hero } from './components/sections/Hero';

// Lazy load sections below the fold for performance
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const Process = lazy(() => import('./components/sections/Process').then(m => ({ default: m.Process })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

function SectionFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Process />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
