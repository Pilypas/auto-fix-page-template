
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Profesionalus automobilių <span className="text-accent">remontas ir priežiūra</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Mūsų kvalifikuoti meistrai užtikrins, kad jūsų automobilis važiuotų sklandžiai ir saugiai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-md text-lg"
              onClick={scrollToServices}
            >
              Mūsų paslaugos
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-md text-lg"
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
              Susisiekti
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-accent font-bold text-xl mb-2">Patirtis</h3>
              <p className="text-white">Daugiau nei 15 metų patirtis automobilių priežiūros srityje</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-accent font-bold text-xl mb-2">Garantija</h3>
              <p className="text-white">Teikiame garantiją visoms atliktiems darbams</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-accent font-bold text-xl mb-2">Kaina</h3>
              <p className="text-white">Konkurencingos kainos ir skaidri kainodara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
