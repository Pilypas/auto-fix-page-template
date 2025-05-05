
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add event listeners for navigation links
    const handleScrollToSection = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = target.getAttribute('href')?.substring(1);
        const section = document.getElementById(sectionId || '');
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleScrollToSection);
    
    return () => {
      document.removeEventListener('click', handleScrollToSection);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
