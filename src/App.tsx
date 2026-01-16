import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-white selection:bg-neon-purple selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
