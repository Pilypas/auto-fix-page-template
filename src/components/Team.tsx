
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const teamData = [
  {
    id: 1,
    name: 'Antanas Baranauskas',
    position: 'Vyresnysis mechanikas',
    description: 'Daugiau nei 20 metų patirties variklio diagnostikos ir remonto srityje.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 2,
    name: 'Linas Norkus',
    position: 'Elektros sistemų specialistas',
    description: 'Ekspertas elektros sistemų diagnostikos ir remonto srityje.',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 3,
    name: 'Marius Petrauskas',
    position: 'Transmisijos specialistas',
    description: 'Specializuojasi automatinių ir mechaninių pavarų dėžių remontuose.',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 4,
    name: 'Robertas Jankauskas',
    position: 'Klientų aptarnavimas',
    description: 'Padeda klientams spręsti problemas ir užtikrina sklandų aptarnavimą.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">Mūsų specialistai</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Komanda</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Mūsų komandą sudaro kvalifikuoti specialistai su ilgamete patirtimi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <Card key={member.id} className="team-card">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
