import {useState} from 'react';
import {AnimatePresence, motion, useScroll, useSpring} from 'motion/react';
import {Menu, X, ArrowUpRight} from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (subject?: string) => void;
}

const NAV_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'Products', href: '#products'},
  {label: 'About Us', href: '#about'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Reviews', href: '#reviews'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar({onOpenQuote}: NavbarProps) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {showAnnouncement && (
          <motion.div
            initial={{opacity: 0, y: -12}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -12}}
            transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="bg-[#240A17] text-white text-xs py-2 px-4 relative z-40"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 pr-8 text-center">
              <span className="font-medium tracking-wide text-[#FCE7F3]">
                All India Delivery · Crafted in Delhi · Free Pan-India Shipping Above ₹2,499
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowAnnouncement(false)}
              aria-label="Dismiss announcement"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/75 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#home"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D174D] rounded"
          >
            Prints for you
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-slate-700 hover:text-[#9D174D] transition-colors whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#9D174D] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9D174D] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              type="button"
              whileHover={{y: -1}}
              whileTap={{scale: 0.98}}
              transition={{duration: 0.15}}
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-[#0F172A] hover:bg-[#FDF2F8] hover:text-[#9D174D] transition-colors focus-visible:outline-2 focus-visible:outline-[#9D174D] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Compositor-only scroll progress bar */}
        <motion.div
          aria-hidden="true"
          style={{scaleX}}
          className="h-[2px] bg-[#9D174D] origin-left w-full"
        />

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{opacity: 0, y: -8}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -8}}
              transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
              className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-lg"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileNavClick}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium text-[#0F172A] hover:text-[#9D174D] hover:bg-[#FDF2F8]/60 rounded-lg transition-colors"
                >
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
