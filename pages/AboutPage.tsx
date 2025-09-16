import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import CertificationBar from '../components/ui/CertificationBar';
import { GlobeIcon, FactoryIcon, MountainIcon, PieChartIcon } from '../components/ui/Icons';


const timelineEvents = [
  {
    year: '2005',
    title: 'The Foundation',
    description: 'GM Barite was established with a clear vision: to set a new standard for quality and efficiency in the mineral processing industry of Andhra Pradesh.',
  },
  {
    year: '2008',
    title: 'Technological Leap',
    description: 'We invested in state-of-the-art German crushing technology, a move that doubled our production capacity and significantly enhanced particle size consistency.',
  },
  {
    year: '2012',
    title: 'Partnership with APMDC',
    description: 'A landmark strategic alliance was forged with the Andhra Pradesh Mineral Development Corporation (APMDC), granting us access to premium-grade raw barite deposits and solidifying our market position.',
  },
  {
    year: '2016',
    title: 'Quality Assured',
    description: 'Achieved the prestigious ISO 9001:2015 certification, a testament to our unwavering commitment to world-class quality management systems.',
  },
  {
    year: '2021',
    title: 'Expanding Horizons',
    description: 'Inaugurated a dedicated micronization unit, allowing us to cater to high-tech industries by producing ultra-fine barite for specialized applications in plastics, pharmaceuticals, and coatings.',
  },
  {
    year: 'Today',
    title: 'Industry Leadership',
    description: 'As a leader in the field, we continue to innovate, focusing on sustainable practices, customer satisfaction, and delivering purity in every particle.',
  },
];

const keyStats = [
    {
        icon: <MountainIcon className="w-12 h-12 text-accent mb-4" />,
        value: "74M+ Tonnes",
        title: "World's Largest Deposit",
        description: "Direct access to the Mangampeta barite reserve, ensuring a consistent, high-quality supply."
    },
    {
        icon: <FactoryIcon className="w-12 h-12 text-accent mb-4" />,
        value: "500,000+ MT",
        title: "Annual Production Capacity",
        description: "Our state-of-the-art facility is equipped to meet large-scale global demand efficiently."
    },
    {
        icon: <GlobeIcon className="w-12 h-12 text-accent mb-4" />,
        value: "20+ Countries",
        title: "Global Export Reach",
        description: "Supplying premier barite to key industrial markets across multiple continents."
    },
    {
        icon: <PieChartIcon className="w-12 h-12 text-accent mb-4" />,
        value: "90%",
        title: "Of India's Barite",
        description: "The Mangampeta mine, our primary source, contributes the vast majority of barite production in the region."
    }
];


const AboutPage: React.FC = () => {
  return (
    <div className="bg-background">
      <PageBanner
        title="About GM Barite"
        imageUrl="https://picsum.photos/seed/aboutbanner/1920/1080"
        altText="Mining Operation"
      />

      <div className="container mx-auto px-6 py-20">
        <section aria-labelledby="heritage-heading">
            <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                <h2 id="heritage-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Our Heritage, Our Strength</h2>
                <p className="text-lg text-primary leading-relaxed mb-4">
                    Our manufacturing unit is strategically located at Mangampeta, Kadapa, Andhra Pradesh, India, a region renowned for its rich barite deposits. We are backed by the <span className="font-semibold">Andhra Pradesh Mineral Development Corporation (APMDC)</span>, which owns and operates the Mangampeta mine.
                </p>
                <p className="text-secondary leading-relaxed">
                    The Mangampeta deposit is the largest single barite deposit in the world, estimated to contain over 74 million tonnes. This mine alone contributes approximately 90% of the barite production in Andhra Pradesh and is the leading barite mine globally. This direct access to a world-class resource ensures an unparalleled, consistent supply of high-quality raw material for our clients.
                </p>
                </div>
                <div>
                <picture>
                    <source srcSet="https://picsum.photos/seed/factory/600/400.webp" type="image/webp" />
                    <img 
                    src="https://picsum.photos/seed/factory/600/400" 
                    alt="Processing Plant" 
                    className="rounded-lg shadow-2xl w-full border border-border"
                    loading="lazy"
                    width="600"
                    height="400"
                    />
                </picture>
                </div>
            </div>
            </AnimatedSection>
        </section>
        
        <section aria-label="Our Certifications" className="my-20">
            <AnimatedSection>
                <CertificationBar />
            </AnimatedSection>
        </section>

        <section aria-labelledby="journey-heading">
            <AnimatedSection>
                <div className="my-20">
                    <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary text-center mb-16">
                    Our Journey: A Timeline of Growth
                    </h2>
                    <div className="relative container mx-auto px-6">
                        <div className="absolute left-8 md:left-1/2 -ml-0.5 w-1 h-full bg-border" aria-hidden="true"></div>
                        <div className="relative space-y-12">
                            {timelineEvents.map((event, index) => (
                            <div key={index} className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-16 md:w-auto">
                                <div className="absolute bg-accent w-6 h-6 rounded-full border-4 border-background shadow-md z-10 left-[22px] md:left-1/2 -ml-3" aria-hidden="true"></div>
                                </div>
                                <div className="w-full md:w-[calc(50%-2rem)] bg-surface p-6 rounded-lg shadow-xl border border-border transform group-odd:md:text-right group-hover:-translate-y-1 transition-transform duration-300 ml-12 md:ml-0">
                                    <p className="text-sm font-semibold text-accent mb-1">{event.year}</p>
                                    <h3 className="mb-2 font-bold text-primary text-xl font-serif">{event.title}</h3>
                                    <p className="text-sm leading-relaxed text-secondary">{event.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="global-presence-heading">
            <AnimatedSection>
            <div className="bg-surface rounded-lg shadow-xl my-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                        <h2 id="global-presence-heading" className="text-3xl font-bold font-serif text-primary mb-4">Global Market Presence</h2>
                        <p className="text-secondary leading-relaxed">
                            Our strategic location and partnership with APMDC enable us to be a dominant force in the global barite market. India is a leading exporter of barytes, and we are at the forefront of this effort, supplying high-grade materials to key markets worldwide. Our robust logistics network ensures reliable and timely delivery for our international clients, solidifying our reputation as a trusted global partner.
                        </p>
                    </div>
                    <div className="h-64 lg:h-full">
                        <picture>
                        <source srcSet="https://picsum.photos/seed/logistics/600/400.webp" type="image/webp" />
                        <img 
                            src="https://picsum.photos/seed/logistics/600/400" 
                            alt="Global Logistics" 
                            className="w-full h-full object-cover rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none"
                            loading="lazy"
                            width="600"
                            height="400"
                        />
                        </picture>
                    </div>
                </div>
            </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="stats-heading" className="my-20">
            <AnimatedSection>
                <div className="text-center">
                    <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12">Our Impact by the Numbers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyStats.map((stat, index) => (
                            <div key={index} className="bg-surface p-6 rounded-lg shadow-xl border border-border text-center transform transition-transform duration-300 hover:-translate-y-2">
                                {stat.icon}
                                <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                                <h3 className="text-lg font-bold font-serif text-primary mb-2">{stat.title}</h3>
                                <p className="text-sm text-secondary">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="sustainability-heading" className="my-20">
            <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <picture>
                        <source srcSet="https://picsum.photos/seed/sustainability/600/400.webp" type="image/webp" />
                        <img 
                        src="https://picsum.photos/seed/sustainability/600/400" 
                        alt="Lush green landscape near a mining area, signifying sustainability" 
                        className="rounded-lg shadow-2xl w-full border border-border"
                        loading="lazy"
                        width="600"
                        height="400"
                        />
                    </picture>
                </div>
                <div>
                    <h2 id="sustainability-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Commitment to Sustainability</h2>
                    <p className="text-lg text-primary leading-relaxed mb-4">
                        At GM Barite, we believe that industrial leadership and environmental stewardship are intrinsically linked. Our operations are designed not only for efficiency and quality but also with a profound respect for the natural environment.
                    </p>
                    <p className="text-secondary leading-relaxed mb-6">
                        We are committed to minimizing our ecological footprint through responsible mining, innovative waste management, and a continuous drive for energy efficiency.
                    </p>
                    <ul className="space-y-4 text-secondary">
                        <li className="flex items-start">
                            <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <h4 className="font-semibold text-primary">Waste Management & Land Reclamation</h4>
                                <p>We implement a comprehensive waste management strategy, focusing on the responsible disposal of overburden and progressive land reclamation to restore biodiversity.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <div>
                                <h4 className="font-semibold text-primary">Energy Efficiency</h4>
                                <p>Our state-of-the-art German crushing technology is selected for its high output and low energy consumption, reducing our carbon footprint per tonne produced.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="values-heading">
            <AnimatedSection>
            <div className="text-center my-20">
                <h2 id="values-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif text-primary mb-2">Quality</h3>
                    <p className="text-secondary">Unyielding commitment to the highest standards of purity and consistency in our products.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif text-primary mb-2">Integrity</h3>
                    <p className="text-secondary">Conducting business with transparency, honesty, and respect for our partners and the environment.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold font-serif text-primary mb-2">Innovation</h3>
                    <p className="text-secondary">Continuously investing in technology and processes to improve efficiency and product excellence.</p>
                </div>
                </div>
            </div>
            </AnimatedSection>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
