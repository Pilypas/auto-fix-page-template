
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Žinutė išsiųsta!",
      description: "Mes su jumis susisieksime kaip įmanoma greičiau.",
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    console.log("Form submitted with data:", formData);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wider">Susisiekite</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Turite klausimų?</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Susisiekite su mumis dėl papildomos informacijos arba norėdami užsiregistruoti serviso paslaugoms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-primary text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Kontaktinė informacija</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-accent" />
                <div>
                  <h4 className="font-bold">Adresas</h4>
                  <p>Servisų g. 42, Vilnius, 01112</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-accent" />
                <div>
                  <h4 className="font-bold">Telefonas</h4>
                  <p>+370 612 34567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-accent" />
                <div>
                  <h4 className="font-bold">El. paštas</h4>
                  <p>info@autofixit.lt</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-4 text-accent" />
                <div>
                  <h4 className="font-bold">Darbo laikas</h4>
                  <p>Pirm - Penkt: 8:00 - 18:00</p>
                  <p>Šeštadienį: 9:00 - 15:00</p>
                  <p>Sekmadienį: uždaryta</p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18386.056176048187!2d25.269795643750616!3d54.687418308979134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941035ecee83%3A0x30ae10233e1119a3!2sVilnius%2C%20Lithuania!5e0!3m2!1sen!2sus!4v1620810000000!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Žemėlapis"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Siųsti užklausą</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Vardas</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jūsų vardas"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">El. paštas</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jusu@paštas.lt"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono numeris</label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+370 6XX XXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Žinutė</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Parašykite savo užklausą čia..."
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 text-lg"
              >
                Siųsti
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
