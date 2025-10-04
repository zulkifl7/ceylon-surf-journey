import { useEffect, useRef, useState } from 'react';

export default function SurfingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-12 mb-16">
          <div
            className={`w-3 bg-[#3B3B3B] transition-all duration-1000 ${
              isVisible ? 'h-48 opacity-100' : 'h-0 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
          <h2
            className={`font-karantina text-[200px] leading-none transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            SURFING
          </h2>
          <div
            className={`flex-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="border-t-[8px] border-[#3B3B3B] pt-6">
              <p className="font-josefin text-lg leading-relaxed mb-6">
                Sri Lanka's surf haven, with golden beaches, warm waters, and long gentle waves –
                perfect for beginners and surfers chasing tropical rides.
              </p>
            </div>
            <div className="border-b-[8px] border-[#3B3B3B] pb-6 w-1/2" />
          </div>
        </div>

        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="font-irish text-7xl mb-12">Weligama</h3>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div
            className={`col-span-7 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="group overflow-hidden h-full">
              <img
                src="https://images.pexels.com/photos/1654490/pexels-photo-1654490.jpeg"
                alt="Weligama surfing"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-5 flex flex-col">
            <div
              className={`group overflow-hidden flex-1 mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <img
                src="https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg"
                alt="Surfing action"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div
              className={`flex justify-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              <button className="px-10 py-4 border-2 border-[#3B3B3B] font-josefin font-semibold hover:bg-[#3B3B3B] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
