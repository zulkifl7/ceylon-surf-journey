import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-[#F7F7F5] shadow-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <a href="#home" className="font-josefin hover:opacity-70 transition-opacity">
              Home
            </a>
            <a href="#gallery" className="font-josefin hover:opacity-70 transition-opacity">
              Gallery
            </a>
            <a href="#services" className="font-josefin hover:opacity-70 transition-opacity">
              Services
            </a>
          </div>

          <div
            className={`mx-12 font-irish text-center transition-all duration-700 ${
              scrolled ? 'text-2xl' : 'text-5xl'
            }`}
          >
            <div className="flex flex-col">
              <span>Ceylon</span>
              <span>Surf</span>
              <span>Diary</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="#story" className="font-josefin hover:opacity-70 transition-opacity">
              Our Story
            </a>
            <a href="#testimonials" className="font-josefin hover:opacity-70 transition-opacity">
              Testimonials
            </a>
            <a href="#contact" className="font-josefin hover:opacity-70 transition-opacity">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
