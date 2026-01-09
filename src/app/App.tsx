import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Technology } from './components/Technology';
import { Courts } from './components/Courts';
import { Bookings } from './components/Bookings';
import { Plans } from './components/Plans';
import { Coaches } from './components/Coaches';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <Concept />
      <Technology />
      <Courts />
      <Bookings />
      <Plans />
      <Coaches />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
