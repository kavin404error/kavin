import { useState } from 'react';
import Hero from './components/Hero';
import SOCDashboard from './components/SOCDashboard';
import SOCSection from './components/SOCSection';
import Resume from './components/Resume';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import WhyBlueTeam from './components/WhyBluTeam';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingIntro from './components/LoadingIntro';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadComplete = () => {
    setShowLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 -z-10"></div>

      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiMxZTQwYWYiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] -z-10 opacity-30"></div>

      <AnimatedBackground />

      {showLoading && <LoadingIntro onLoadComplete={handleLoadComplete} />}

      <main>
        <Hero />
        <SOCDashboard />
        <SOCSection />
        <Tools />
        <WhyBlueTeam />
        <Resume />
        <About />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
