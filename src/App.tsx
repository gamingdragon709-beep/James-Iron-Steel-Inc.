import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreCapabilities } from './components/CoreCapabilities';
import { PrecisionBanner } from './components/PrecisionBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { RecentProjects } from './components/RecentProjects';
import { FinishStudio } from './components/FinishStudio';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Testimonials } from './components/Testimonials';
import { SeeUsInAction } from './components/SeeUsInAction';
import { ServiceArea } from './components/ServiceArea';
import { FaqSection } from './components/FaqSection';
import { EstimateForm } from './components/EstimateForm';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { VideoModal } from './components/VideoModal';
import { ProjectItem, VideoReel, PROJECTS } from './data/mockData';

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);
  const [estimatePrefill, setEstimatePrefill] = useState<{
    service: string;
    details: string;
  }>({
    service: '',
    details: ''
  });

  const handleSelectService = (serviceName: string) => {
    setEstimatePrefill({
      service: serviceName,
      details: `Inquiring about ${serviceName} specifications and fabrication schedules.`
    });
    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFinish = (finishName: string) => {
    setEstimatePrefill(prev => ({
      ...prev,
      details: `${prev.details ? prev.details + ' ' : ''}Preferred Coating Spec: ${finishName}.`
    }));
    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyEstimator = (data: { service: string; details: string }) => {
    setEstimatePrefill(data);
  };

  const handleRequestQuoteForProject = (projectTitle: string) => {
    setEstimatePrefill({
      service: 'Residential Interior/Exterior Railings',
      details: `I would like to request an estimate for a build similar to: "${projectTitle}". Please provide timeline and options.`
    });
    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHighlightProjectClick = () => {
    // Find the highlight project
    const highlight = PROJECTS.find(p => p.id === 'lake-norman-highlight') || PROJECTS[0];
    setActiveProject(highlight);
  };

  const scrollToEstimate = () => {
    const el = document.getElementById('estimate-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#18181B] flex flex-col font-body selection:bg-[#D91D24] selection:text-white">
      {/* Main Top Header */}
      <Header onOpenEstimator={scrollToEstimate} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onEstimateClick={scrollToEstimate} />

        {/* Core Capabilities (Light Sandstone Section) */}
        <CoreCapabilities onSelectService={handleSelectService} />

        {/* Dark Contrast Precision Banner ("Seven Decades of Precision") */}
        <PrecisionBanner 
          onScheduleClick={scrollToEstimate}
          onViewProjectHighlight={handleHighlightProjectClick}
        />

        {/* Why Choose Us Bento (01, 02, 03) */}
        <WhyChooseUs />

        {/* Recent Projects Gallery (Light Sandstone Section) */}
        <RecentProjects 
          onSelectProject={(proj) => setActiveProject(proj)}
          onContactClick={scrollToEstimate}
        />

        {/* Interactive Architectural Finish Studio */}
        <FinishStudio onSelectFinish={handleSelectFinish} />

        {/* Instant Project Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimator} />

        {/* Client Reviews Section (Light White Section) */}
        <Testimonials />

        {/* See Us In Action Video Reels */}
        <SeeUsInAction onPlayReel={(reel) => setActiveReel(reel)} />

        {/* Service Area / Where We Work */}
        <ServiceArea />

        {/* FAQ Accordion with Search */}
        <FaqSection />

        {/* High-Converting Estimate & Consultation Form */}
        <EstimateForm 
          initialService={estimatePrefill.service}
          initialDetails={estimatePrefill.details}
        />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal 
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestQuote={handleRequestQuoteForProject}
      />

      <VideoModal 
        reel={activeReel}
        onClose={() => setActiveReel(null)}
      />
    </div>
  );
}
