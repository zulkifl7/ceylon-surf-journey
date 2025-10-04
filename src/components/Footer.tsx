import { Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="font-irish text-3xl mb-6">
              <div className="flex flex-col">
                <span>Ceylon</span>
                <span>Surf</span>
                <span>Diary</span>
              </div>
            </h3>
          </div>

          <div>
            <h4 className="font-josefin font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#service1"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Service 1
                </a>
              </li>
              <li>
                <a
                  href="#service2"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Service 2
                </a>
              </li>
              <li>
                <a
                  href="#service3"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Service 3
                </a>
              </li>
              <li>
                <a
                  href="#service4"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Service 4
                </a>
              </li>
              <li>
                <a
                  href="#service5"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Service 5
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-josefin font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="font-josefin hover:opacity-70 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="font-josefin hover:opacity-70 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="font-josefin hover:opacity-70 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#story" className="font-josefin hover:opacity-70 transition-opacity">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="font-josefin hover:opacity-70 transition-opacity"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-josefin font-semibold text-lg mb-6">Social</h4>
            <div className="flex gap-4">
              <a
                href="#linkedin"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#facebook"
                className="hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#instagram"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
