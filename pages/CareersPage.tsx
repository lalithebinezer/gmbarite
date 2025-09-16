import React from 'react';
import type { Page } from '../types';
import AnimatedSection from '../components/ui/AnimatedSection';
import PageBanner from '../components/ui/PageBanner';
import Accordion from '../components/ui/Accordion';
import { mockCareers } from '../data/mockData';
import { GrowthIcon, TeamworkIcon, ShieldIcon, InnovationIcon } from '../components/ui/Icons';

interface CareersPageProps {
  setCurrentPage: (page: Page) => void;
}

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-surface p-6 rounded-lg shadow-lg border border-border text-center">
        <div className="w-16 h-16 mb-4 bg-background rounded-full shadow-inner border border-border flex items-center justify-center mx-auto text-accent">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-serif text-primary mb-2">{title}</h3>
        <p className="text-secondary text-sm">{description}</p>
    </div>
);


const JobOpeningCard: React.FC<{ job: typeof mockCareers[0]; setCurrentPage: (page: Page) => void; }> = ({ job, setCurrentPage }) => {
    
    const handleApplyClick = () => {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
    }

    return (
        <div className="bg-surface p-6 rounded-lg shadow-lg border border-border">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                    <h3 className="text-2xl font-bold font-serif text-primary">{job.title}</h3>
                    <p className="text-secondary font-semibold">{job.location} &bull; {job.type}</p>
                </div>
                <button 
                    onClick={handleApplyClick}
                    className="mt-4 md:mt-0 bg-accent text-white font-serif font-bold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-accent-dark hover:scale-105 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                    Apply Now
                </button>
            </div>
            <p className="text-primary mb-4">{job.description}</p>
            <div className="space-y-2">
                 <Accordion title="Key Responsibilities">
                    <ul className="list-disc list-inside space-y-1">
                        {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </Accordion>
                <Accordion title="Qualifications">
                     <ul className="list-disc list-inside space-y-1">
                        {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </Accordion>
            </div>
        </div>
    );
}

const CareersPage: React.FC<CareersPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-background">
      <PageBanner
        title="Join Our Team"
        imageUrl="https://picsum.photos/seed/careers/1920/1080"
        altText="A collaborative team working in an industrial setting"
      />
      <div className="container mx-auto px-6 py-20">
        
        <section aria-labelledby="careers-intro-heading" className="mb-20">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 id="careers-intro-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Build Your Career with an Industry Leader</h2>
                    <p className="text-lg text-primary leading-relaxed">
                        At GM Barite, we are more than just a mineral processing company. We are a team of innovators, problem-solvers, and dedicated professionals committed to excellence. We offer a dynamic work environment where your skills are valued, your growth is nurtured, and your contributions make a global impact.
                    </p>
                </div>
            </AnimatedSection>
        </section>

        <section aria-labelledby="values-heading" className="mb-20">
             <AnimatedSection>
                <div className="text-center mb-12">
                     <h2 id="values-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary">Why Work With Us?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard 
                        icon={<GrowthIcon className="w-8 h-8"/>} 
                        title="Professional Growth"
                        description="We invest in our employees' development with continuous training and opportunities for advancement."
                    />
                     <ValueCard 
                        icon={<TeamworkIcon className="w-8 h-8"/>} 
                        title="Collaborative Culture"
                        description="Be part of a supportive team that values open communication and shared success."
                    />
                     <ValueCard 
                        icon={<ShieldIcon className="w-8 h-8"/>} 
                        title="Safety First"
                        description="Your well-being is our top priority. We maintain the highest safety standards in all operations."
                    />
                     <ValueCard 
                        icon={<InnovationIcon className="w-8 h-8"/>} 
                        title="Impactful Work"
                        description="Contribute to a company at the forefront of the industry, supplying essential materials worldwide."
                    />
                </div>
             </AnimatedSection>
        </section>
        
        <section aria-labelledby="openings-heading">
            <AnimatedSection>
                <div className="text-center mb-12">
                     <h2 id="openings-heading" className="text-3xl md:text-4xl font-bold font-serif text-primary">Current Openings</h2>
                     <p className="text-secondary mt-2">Explore the opportunities to join our growing team.</p>
                </div>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {mockCareers.length > 0 ? (
                        mockCareers.map(job => (
                            <JobOpeningCard key={job.id} job={job} setCurrentPage={setCurrentPage} />
                        ))
                    ) : (
                        <div className="text-center bg-surface p-8 rounded-lg shadow-md border border-border">
                            <p className="text-secondary">There are currently no open positions. Please check back later or send us a speculative application.</p>
                        </div>
                    )}
                </div>
            </AnimatedSection>
        </section>

         <section aria-labelledby="speculative-cta-heading" className="mt-20">
            <AnimatedSection>
                <div className="bg-surface p-8 rounded-lg shadow-xl text-center border border-border">
                    <h2 id="speculative-cta-heading" className="text-2xl font-bold font-serif text-primary mb-4">Don't See a Role That Fits?</h2>
                    <p className="text-secondary mb-6 max-w-2xl mx-auto">
                        We are always looking for talented and passionate individuals. If you believe you have what it takes to contribute to our team, we'd love to hear from you.
                    </p>
                    <button 
                        onClick={() => {
                            setCurrentPage('contact');
                            window.scrollTo(0, 0);
                        }}
                        className="bg-accent text-white font-serif font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                        Submit Your Resume
                    </button>
                </div>
            </AnimatedSection>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;