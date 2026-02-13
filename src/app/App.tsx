import Header from './components/Header';
import Hero from './components/Hero';
import BrandEssence from './components/BrandEssence';
import FeaturedCollection from './components/FeaturedCollection';
import CraftAtelier from './components/CraftAtelier';
import MaterialStory from './components/MaterialStory';
import Sustainability from './components/Sustainability';
import LookbookGallery from './components/LookbookGallery';
import StoreStockist from './components/StoreStockist';
import FinalCTA from './components/FinalCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <BrandEssence />
        <FeaturedCollection />
        <CraftAtelier />
        <MaterialStory />
        <Sustainability />
        <LookbookGallery />
        <StoreStockist />
        <FinalCTA />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
