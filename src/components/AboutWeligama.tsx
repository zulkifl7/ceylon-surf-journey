import { useEffect, useRef, useState } from 'react';

export default function AboutWeligama() {
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
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="font-josefin text-5xl font-normal mb-2">hey !</h2>
            <h3 className="font-josefin text-5xl font-normal mb-8">
              we are Weligama, a surfing paradise
            </h3>

            <p className="font-josefin text-3xl font-light leading-relaxed mb-12">
              Surfing paradise of Weligama Bay, the heart of Sri Lanka's southern coast.
            </p>

            <p className="font-josefin text-lg font-light leading-relaxed">
              Weligama, meaning "sandy village," is a vibrant coastal town in Sri Lanka's Matara
              district, famous for its beginner-friendly surf breaks and iconic stilt fishermen. It
              offers a perfect blend of beach life and local culture, drawing travelers seeking sun,
              surf, and genuine island charm.
            </p>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="font-josefin text-lg font-light leading-relaxed">
              Weligama is not just about waves and sunsets; it is also a hub of artisanal
              craftsmanship and local flavors. The town's markets overflow with fresh seafood,
              tropical fruits, and handmade souvenirs, reflecting the rich heritage of its community.
            </p>

            <p className="font-josefin text-lg font-light leading-relaxed">
              Beyond the beaches, visitors can explore historic temples, scenic rice paddies, and
              hidden lagoons, all of which add depth to the town's coastal appeal. Weligama's vibrant
              atmosphere is enhanced by friendly locals who warmly welcome travelers, making every
              visit a blend of adventure, relaxation, and cultural immersion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
