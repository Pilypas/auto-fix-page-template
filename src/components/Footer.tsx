
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              AUTO<span className="text-accent">FIXIT</span>
            </h3>
            <p className="mb-4">
              Profesionalus automobilių remonto servisas, teikiantis kokybiškas paslaugas už konkurencingas kainas.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-accent transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Greitos nuorodos</h3>
            <ul className="space-y-2">
              {['Pagrindinis', 'Paslaugos', 'Apie mus', 'Komanda', 'Kontaktai'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase() === 'pagrindinis' ? 'home' : item.toLowerCase()}`}
                    className="flex items-center hover:text-accent transition duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = item.toLowerCase() === 'pagrindinis' ? 'home' : item.toLowerCase();
                      const section = document.getElementById(sectionId);
                      if (section) {
                        window.scrollTo({
                          top: section.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Paslaugos</h3>
            <ul className="space-y-2">
              {['Variklio diagnostika', 'Stabdžių sistema', 'Variklio remontas', 'Reguliari priežiūra', 'Elektros sistema'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="flex items-center hover:text-accent transition duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById('services');
                      if (section) {
                        window.scrollTo({
                          top: section.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontaktai</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">Adresas:</span>
                <span>Servisų g. 42, Vilnius, 01112</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">Telefonas:</span>
                <span>+370 612 34567</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">El. paštas:</span>
                <span>info@autofixit.lt</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">Darbo laikas:</span>
                <span>Pirm - Penkt: 8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="py-4 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} AutoFixit. Visos teisės saugomos.</p>
            <p className="mt-2 md:mt-0">Sukurta su <span className="text-accent">♥</span> jūsų patogumui</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
