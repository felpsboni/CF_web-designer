import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ConversionCTA } from './components/ConversionCTA';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-blue-600/30 selection:text-white">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Conversion & Informational Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <Testimonials />
        <ConversionCTA />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
