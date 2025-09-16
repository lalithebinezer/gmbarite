import React, { useRef, useState, useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AnimatedSection from '../components/ui/AnimatedSection';
import ImageCarousel from '../components/ui/ImageCarousel';
import CertificationBar from '../components/ui/CertificationBar';
import type { Page, Product } from '../types';
import { mockProducts, mockTestimonials, mockCarouselImages } from '../data/mockData';
import { OilIcon, PaintIcon, ChemicalIcon, ShieldIcon, AutomotiveIcon, MedicalIcon } from '../components/ui/Icons';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const ProductCard: React.FC<{product: Product}> = ({ product }) => (
    <div className="bg-surface rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl border border-border">
        <picture>
            <source srcSet={`${product.imageUrl}.webp`} type="image/webp" />
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-48 object-cover"
                loading="lazy"
                width="600"
                height="400"
            />
        </picture>
        <div className="p-6">
            <h3 className="text-xl font-bold font-serif text-primary mb-2">{product.name}</h3>
            <p className="text-secondary text-sm mb-4">{product.description}</p>
        </div>
    </div>
);

const TestimonialCard: React.FC<{testimonial: typeof mockTestimonials[0]}> = ({ testimonial }) => (
    <div className="bg-surface p-6 md:p-8 rounded-lg shadow-xl flex flex-col h-full border border-border transition-all duration-300 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2">
        <svg aria-hidden="true" className="w-10 h-10 text-accent mb-4 opacity-25" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M0 12.205c0-1.834.633-3.372 1.898-4.618C3.163 6.34 4.832 5.717 6.904 5.717v2.475c-1.332 0-2.28.344-2.844.985-.564.641-.846 1.625-.846 2.95h3.69V18H0v-5.795zm11.096 0c0-1.834.633-3.372 1.898-4.618C14.258 6.34 15.927 5.717 18 5.717v2.475c-1.332 0-2.28.344-2.844.985-.564.641-.846 1.625-.846 2.95h3.69V18h-6.904v-5.795z"/>
        </svg>
        <p className="text-primary italic mb-6 flex-grow leading-relaxed">"{testimonial.quote}"</p>
        <div className="mt-auto">
            <p className="font-bold text-primary font-serif">{testimonial.name}</p>
            <p className="text-sm text-secondary">{testimonial.company}</p>
        </div>
    </div>
);

const ApplicationIcon: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="w-20 h-20 mb-4 bg-surface rounded-full shadow-lg flex items-center justify-center border-2 border-border text-accent">
            {icon}
        </div>
        <h3 className="font-bold font-serif text-primary">{title}</h3>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const procurementSectionRef = useRef<HTMLDivElement>(null);
  const [isProcurementVisible, setIsProcurementVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsProcurementVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: '100px' }
    );

    const currentRef = procurementSectionRef.current;
    if (currentRef) {
        observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
  }, []);

  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <div className="relative bg-background z-10">
        <section aria-labelledby="intro-heading">
            <AnimatedSection>
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Premier Global Supplier of High-Purity Barite</h2>
                <p className="max-w-3xl mx-auto text-lg text-primary leading-relaxed">
                Strategically located at Mangampeta, the heart of the world's largest barite deposit, and backed by the prestigious <span className="font-bold text-primary">APMDC</span>, we are leaders in mineral crushing. We leverage state-of-the-art technology to deliver high-grade barite powders for diverse industrial applications globally.
                </p>
            </div>
            </AnimatedSection>
        </section>
        
        <section aria-label="Certifications">
            <AnimatedSection>
                <CertificationBar />
            </AnimatedSection>
        </section>
        
        <section aria-labelledby="products-heading">
            <AnimatedSection>
            <div className="bg-surface">
                <div className="container mx-auto px-6 py-20">
                <h2 id="products-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">Our Core Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProducts.slice(0, 3).map(product => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button 
                    onClick={() => {
                        setCurrentPage('products');
                        window.scrollTo(0, 0);
                    }}
                    className="bg-accent text-white font-serif font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                    Explore All Technical Grades
                    </button>
                </div>
                </div>
            </div>
            </AnimatedSection>
        </section>
        
        <section aria-labelledby="applications-heading">
            <AnimatedSection>
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 id="applications-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12">Key Applications of Barite</h2>
                <p className="max-w-3xl mx-auto text-lg text-primary leading-relaxed mb-12">
                    Barite's unique properties—high density, chemical inertness, and non-toxicity—make it an indispensable material across a wide range of critical industries.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <ApplicationIcon icon={<OilIcon />} title="Oil & Gas Drilling" />
                    <ApplicationIcon icon={<PaintIcon />} title="Paints & Coatings" />
                    <ApplicationIcon icon={<ChemicalIcon />} title="Chemicals" />
                    <ApplicationIcon icon={<ShieldIcon />} title="Radiation Shielding" />
                    <ApplicationIcon icon={<AutomotiveIcon />} title="Automotive" />
                    <ApplicationIcon icon={<MedicalIcon />} title="Medical" />
                </div>
            </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="testimonials-heading">
            <AnimatedSection>
                <div className="container mx-auto px-6 py-20">
                    <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {mockTestimonials.map(testimonial => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="operations-heading">
            <AnimatedSection>
                <div className="bg-surface">
                    <div className="container mx-auto px-6 py-20">
                        <h2 id="operations-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-12">A Glimpse Into Our Operations</h2>
                        <ImageCarousel images={mockCarouselImages} />
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="procurement-heading">
            <AnimatedSection>
                <div
                    ref={procurementSectionRef}
                    className="relative bg-primary"
                >
                    {isProcurementVisible && (
                        <picture className="absolute inset-0 animate-fade-in">
                            <source srcSet="https://picsum.photos/1920/1080.webp?grayscale&blur=2" type="image/webp" />
                            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="" aria-hidden="true" className="w-full h-full object-cover"/>
                        </picture>
                    )}
                    <div className="relative bg-primary bg-opacity-90">
                        <div className="container mx-auto px-6 py-20 text-center text-white">
                            <h2 id="procurement-heading" className="text-3xl md:text-4xl font-bold font-serif mb-4">Streamline Your Procurement</h2>
                            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                                Partner with us for unparalleled quality and a reliable supply chain. Submit your RFQ to get a detailed quote from our experts.
                            </p>
                            <button 
                            onClick={() => {
                                setCurrentPage('contact');
                                window.scrollTo(0, 0);
                            }}
                            className="bg-accent text-white font-serif font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Request a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default HomePage;