import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        setParallaxOffset(scrolled * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="pt-48 pb-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-josefin text-lg md:text-xl leading-relaxed text-center mb-8">
          Through the lens, I chase the energy of the ocean – capturing surfers dancing with waves,
          sunlight glistening on water, and the raw spirit of adventure. Every photograph tells a
          story of freedom, motion, and the endless horizon.
        </p>

        <div className="flex justify-end -mr-6">
          <button className="group flex items-center gap-3 px-12 pr-16 py-4 border-2 border-[#3B3B3B] font-josefin font-semibold hover:bg-[#3B3B3B] hover:text-white transition-all duration-300">
            Explore
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
