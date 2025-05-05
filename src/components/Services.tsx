
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Car, Calendar, Info } from 'lucide-react';

const serviceData = [
  {
    id: 1,
    title: 'Variklio diagnostika',
    description: 'Naudojame pažangiausią diagnostinę įrangą, kad nustatytume jūsų automobilio problemas.',
    icon: <Settings size={40} className="text-accent" />,
  },
  {
    id: 2,
    title: 'Stabdžių sistema',
    description: 'Užtikriname, kad jūsų automobilio stabdžių sistema veiktų efektyviai ir saugiai.',
    icon: <Car size={40} className="text-accent" />,
  },
  {
    id: 3,
    title: 'Variklio remontas',
    description: 'Profesionalus variklio remontas ir priežiūra, kad automobilis tarnautų ilgiau.',
    icon: <Wrench size={40} className="text-accent" />,
  },
  {
    id: 4,
    title: 'Reguliari priežiūra',
    description: 'Reguliari techninė priežiūra padės išvengti didelių remontų ateityje.',
    icon: <Calendar size={40} className="text-accent" />,
  },
  {
    id: 5,
    title: 'Sankabos remontas',
    description: 'Kokybiškas sankabos remontas ir keitimas už konkurencingą kainą.',
    icon: <Wrench size={40} className="text-accent" />,
  },
  {
    id: 6,
    title: 'Elektros sistema',
    description: 'Elektros gedimų diagnozavimas ir šalinimas, elektros sistemos priežiūra.',
    icon: <Info size={40} className="text-accent" />,
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">Ką mes siūlome</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Mūsų paslaugos</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Teikiame platų spektrą aukštos kokybės automobilių remonto paslaugų. Mūsų kvalifikuota komanda pasirūpins jūsų automobiliu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <Card key={service.id} className="service-card hover:border-accent hover:border transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/5 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-8">
            Nematote reikiamos paslaugos? Susisiekite su mumis dėl individualių sprendimų.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            onClick={(e) => {
              e.preventDefault();
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
