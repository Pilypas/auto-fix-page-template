
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Automobilių remonto dirbtuvės" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 md:p-8 rounded-lg shadow-lg">
                <p className="text-xl md:text-3xl font-bold">15+</p>
                <p className="text-sm md:text-base">Metų patirties</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full -z-10 blur-3xl"></div>
          </div>
          
          {/* Right side: Content */}
          <div>
            <span className="text-accent font-medium uppercase tracking-wider">Apie mus</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Automobilių remonto ekspertai nuo 2007 metų</h2>
            <p className="text-gray-600 mb-6">
              Mūsų autoserviso komanda susideda iš aukštos kvalifikacijos specialistų, turinčių didelę patirtį automobilių remonto srityje. Mes naudojame tik aukštos kokybės dalis ir moderniausią įrangą, kad užtikrintume geriausius rezultatus.
            </p>
            <p className="text-gray-600 mb-8">
              Mums svarbiausia klientų pasitenkinimas, todėl visada siekiame viršyti jūsų lūkesčius. Dėl to daugelis mūsų klientų rekomenduoja mus savo draugams ir šeimos nariams.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Profesionalūs meistrai', 'Konkurencingos kainos', 'Garantija atliktam darbui', 'Modernus įrangos parkas'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="text-accent mr-2" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Sužinokite daugiau
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
