import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
    </div>
  );
};

export default App;
