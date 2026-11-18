/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {MotionConfig} from 'motion/react';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {GalleryAndReviews} from './components/GalleryAndReviews';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {QuoteModal} from './components/QuoteModal';
import {ServicesAndCatalog} from './components/ServicesAndCatalog';
import {WhyAndProcess} from './components/WhyAndProcess';
import type {ProductCategory} from './data/catalog';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState<string>('');

  const handleOpenQuote = (subject = '') => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const handleEnquireProduct = (productName: string, category: string) => {
    setQuoteSubject(`${productName} (${category})`);
    setQuoteModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
        <Navbar onOpenQuote={handleOpenQuote} />

        <main className="flex-1">
          <HeroSection onOpenQuote={handleOpenQuote} />

          <ServicesAndCatalog
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onEnquireProduct={handleEnquireProduct}
          />

          <WhyAndProcess onOpenQuote={handleOpenQuote} />

          <GalleryAndReviews onOpenQuote={handleOpenQuote} />

          <ContactSection />
        </main>

        <Footer />

        <QuoteModal
          isOpen={quoteModalOpen}
          initialSubject={quoteSubject}
          onClose={() => setQuoteModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
