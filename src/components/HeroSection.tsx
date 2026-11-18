import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowRight, MessageCircle} from 'lucide-react';
import {BUSINESS_INFO, IMAGES, buildWhatsAppUrl} from '../data/catalog';
import {ResilientImage} from './ResilientImage';

interface HeroSectionProps {
  onOpenQuote: (subject?: string) => void;
}

const SHOWCASE_SLIDES = [
  {
    id: 'atelier',
    label: 'Studio Collection',
    caption: 'Bespoke stationery, foil cards & rigid packaging',
    image: IMAGES.hero,
  },
  {
    id: 'cards',
    label: 'Foil Cards',
    caption: '400gsm velvet matte cotton with hot gold stamping',
    image: IMAGES.businessCards,
  },
  {
    id: 'invites',
    label: 'Wedding Suites',
    caption: 'Deckled handmade paper, vellum wrap & wax seals',
    image: IMAGES.weddingInvites,
  },
  {
    id: 'packaging',
    label: 'Rigid Boxes',
    caption: 'Custom magnetic gift boxes & printed brand mailers',
    image: IMAGES.packaging,
  },
];

export function HeroSection({onOpenQuote}: HeroSectionProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentSlide = SHOWCASE_SLIDES[activeSlideIndex];

  const whatsappHeroUrl = buildWhatsAppUrl(
    'Hello Prints for you! I would like to enquire about custom printing.'
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FDF2F8]/80 via-white to-white bg-atelier-grid pt-10 pb-14 lg:pt-16 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col justify-center space-y-7"
          >
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#9D174D]">
                Your Trusted Printing Partner <span aria-hidden="true">·</span> Delhi Studio <span aria-hidden="true">·</span> All India Delivery
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold leading-[1.08] tracking-tight text-[#0F172A]">
                Bring Your Ideas to Life with{' '}
                <span className="italic text-[#9D174D]">Premium</span> Printing.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Bespoke die-cut stickers, velvet foil business cards, luxury wedding invitations, and rigid brand packaging — precision printed in Delhi and dispatched safely to every pincode across India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#products"
                whileHover={{y: -2}}
                whileTap={{scale: 0.98}}
                transition={{duration: 0.15}}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors duration-150 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>

              <motion.button
                type="button"
                whileHover={{y: -2}}
                whileTap={{scale: 0.98}}
                transition={{duration: 0.15}}
                onClick={() => onOpenQuote()}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0F172A] bg-white hover:bg-[#FDF2F8] border border-slate-300 hover:border-[#9D174D]/50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] cursor-pointer"
              >
                <span>Get a Quote</span>
              </motion.button>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#9D174D] transition-colors py-2 px-1 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] rounded"
              >
                <MessageCircle className="w-4 h-4 text-[#9D174D]" aria-hidden="true" />
                <span>WhatsApp {BUSINESS_INFO.phoneRaw}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col gap-3"
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-md aspect-[16/10] lg:flex-1 lg:min-h-[410px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{opacity: 0, scale: 1.02}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.99}}
                  transition={{duration: 0.32, ease: [0.16, 1, 0.3, 1]}}
                  className="w-full h-full"
                >
                  <ResilientImage
                    src={currentSlide.image}
                    alt={`${currentSlide.label} — ${currentSlide.caption}`}
                    title={currentSlide.label}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pb-4 pt-12 pointer-events-none">
                <p className="text-xs font-medium text-[#FCE7F3]">
                  {currentSlide.label}
                </p>
                <p className="text-sm font-medium text-white mt-0.5">
                  {currentSlide.caption}
                </p>
              </div>
            </div>

            {/* Interactive Showcase Finish Switcher */}
            <div
              role="tablist"
              aria-label="Preview studio print finishes"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
            >
              {SHOWCASE_SLIDES.map((slide, index) => {
                const isActive = index === activeSlideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`relative px-3 py-2.5 text-xs font-medium rounded-xl border text-left transition-colors whitespace-nowrap truncate cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9D174D] ${
                      isActive
                        ? 'border-[#9D174D] bg-[#FDF2F8] text-[#9D174D] font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0F172A]'
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-65 mr-1.5">
                      0{index + 1}
                    </span>
                    <span>{slide.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1]}}
          className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tabular-nums">
              1,400+
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Pan-India Orders Fulfilled
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tabular-nums">
              350–450 GSM
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Archival &amp; Luxury Paper Stocks
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tabular-nums">
              48 Hours
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Express Dispatch from Delhi
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tabular-nums">
              28 States
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Insured Doorstep Delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
