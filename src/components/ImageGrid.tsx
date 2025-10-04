import { useEffect, useRef, useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

function GalleryImage({ src, alt, className = '' }: ImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`group overflow-hidden ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } transition-all duration-1000`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
      />
    </div>
  );
}

export default function ImageGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-2 h-[500px] -ml-12">
            <GalleryImage
              src="https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg"
              alt="Surfer at sunset"
            />
          </div>
          <div className="col-span-8 h-[500px]">
            <GalleryImage
              src="https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg"
              alt="Surfing wave"
            />
          </div>
          <div className="col-span-2 h-[500px] -mr-12">
            <GalleryImage
              src="https://images.pexels.com/photos/1654496/pexels-photo-1654496.jpeg"
              alt="Ocean waves"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 h-[400px]">
            <GalleryImage
              src="https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg"
              alt="Beach surfing"
            />
          </div>
          <div className="col-span-2 h-[400px]">
            <GalleryImage
              src="https://images.pexels.com/photos/2294360/pexels-photo-2294360.jpeg"
              alt="Surfer portrait"
            />
          </div>
          <div className="col-span-5 h-[400px]">
            <GalleryImage
              src="https://images.pexels.com/photos/1654490/pexels-photo-1654490.jpeg"
              alt="Wave action"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 border-2 border-[#3B3B3B] font-josefin font-semibold hover:bg-[#3B3B3B] hover:text-white transition-all duration-300">
            VIEW FULL GALLERY
          </button>
        </div>
      </div>
    </section>
  );
}
