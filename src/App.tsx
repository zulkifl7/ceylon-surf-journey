import Header from './components/Header';
import Hero from './components/Hero';
import ImageGrid from './components/ImageGrid';
import SurfingSection from './components/SurfingSection';
import AboutWeligama from './components/AboutWeligama';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageGrid />
        <SurfingSection />
        <AboutWeligama />
      </main>
      <Footer />
    </div>
  );
}

export default App;
