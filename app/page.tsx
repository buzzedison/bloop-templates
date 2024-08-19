import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ComponentGrid from './components/ComponentsGrid';


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ComponentGrid/>
 
      <Footer />
    </div>
  );
}
