import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Services />
      <ImageSlider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
