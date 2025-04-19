import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Identity from '@/components/Identity';
import Features from '@/components/Features';
import AuraVisual from '@/components/AuraVisual';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Manifesto />
      <Identity />
      <Features />
      <AuraVisual />
      <Footer />
    </div>
  );
}