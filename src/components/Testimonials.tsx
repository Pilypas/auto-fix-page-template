
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: 'Jonas Petraitis',
    role: 'BMW savininkas',
    quote: 'Labai profesionalus aptarnavimas. Greitai nustatė problemą ir ją išsprendė. Rekomenduoju visiems.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Laura Kazlauskienė',
    role: 'Audi savininkė',
    quote: 'Puikus aptarnavimas ir kainos. Labai patenkinta rezultatu ir tikrai grįšiu ateityje.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Tomas Balčiūnas',
    role: 'Toyota savininkas',
    quote: 'Profesionalus meistras, kokybiškai atliko sankabos keitimą. Kaina atitiko kokybę.',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
  },
  {
    id: 4,
    name: 'Marius Kazlauskas',
    role: 'Volkswagen savininkas',
    quote: 'Jau trečius metus patikiu savo automobilį šiems meistrams ir niekada nenuvylė. Visada kokybiškas servisas.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 5,
    name: 'Viktorija Žilinskienė',
    role: 'Mercedes savininkė',
    quote: 'Nustebino greitas ir profesionalus aptarnavimas. Problema buvo išspręsta per vieną dieną.',
    avatar: 'https://randomuser.me/api/portraits/women/54.jpg'
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialPerPage = 3;
  const totalPages = Math.ceil(testimonialData.length / testimonialPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonialData.slice(
    currentPage * testimonialPerPage,
    (currentPage + 1) * testimonialPerPage
  );

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">Atsiliepimai</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ką klientai sako apie mus</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Mums svarbi klientų nuomonė. Štai ką apie mus sako klientai, pasinaudoję mūsų paslaugomis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="p-0">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button 
                key={index} 
                variant={index === currentPage ? "default" : "outline"} 
                size="icon"
                onClick={() => setCurrentPage(index)}
                className={index === currentPage ? "bg-accent hover:bg-accent/90" : "border-primary"}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
