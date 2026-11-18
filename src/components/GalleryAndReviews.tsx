import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {ArrowUpRight, Instagram, Quote, Star, X, ZoomIn} from 'lucide-react';
import {
  BUSINESS_INFO,
  INSTAGRAM_POSTS,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS,
  type PortfolioProject,
} from '../data/catalog';
import {ResilientImage} from './ResilientImage';

interface GalleryAndReviewsProps {
  onOpenQuote: (subject?: string) => void;
}

export function GalleryAndReviews({onOpenQuote}: GalleryAndReviewsProps) {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <>
      {/* Portfolio & Instagram Gallery */}
      <section id="gallery" className="scroll-mt-20 py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Our Recent Work */}
          <div className="space-y-10">
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                  Our Recent Work
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight">
                  Selected Commissions &amp; Production Runs
                </h2>
              </div>
              <p className="text-sm text-slate-600 max-w-md">
                Click any project below to inspect paper stocks, foil finishes, and batch specifications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {PORTFOLIO_PROJECTS.map((project, index) => {
                const isWide = index === 0 || index === 3;
                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={{opacity: 0, y: 18}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.15}}
                    transition={{
                      duration: 0.38,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{y: -4}}
                    onClick={() => setSelectedProject(project)}
                    className={`group text-left rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:shadow-lg transition-shadow duration-200 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] ${
                      isWide ? 'md:col-span-7' : 'md:col-span-5'
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <ResilientImage
                        src={project.image}
                        alt={project.title}
                        title={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-medium text-white bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-md transition-transform duration-200 group-hover:scale-105">
                        <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>View Details</span>
                      </span>
                    </div>

                    <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <p className="text-xs text-slate-500 font-medium">
                          {project.category} <span aria-hidden="true">·</span> {project.client} <span aria-hidden="true">·</span> {project.city}
                        </p>
                        <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#9D174D] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>
                      <p className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
                        {project.specs}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Instagram Gallery */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.15}}
            transition={{duration: 0.42, ease: [0.16, 1, 0.3, 1]}}
            className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#FDF2F8]/70 via-[#FDF2F8]/30 to-white p-6 sm:p-10 space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                  Fresh Off The Press
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
                  Follow Our Delhi Studio on Instagram
                </h2>
                <p className="text-sm text-slate-600">
                  Daily foil reels, packaging unboxings, and paper texture previews at{' '}
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#9D174D] hover:underline"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </p>
              </div>

              <motion.a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{y: -2}}
                whileTap={{scale: 0.98}}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>Visit {BUSINESS_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {INSTAGRAM_POSTS.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.15}}
                  transition={{
                    duration: 0.34,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{y: -3}}
                  className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-white block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
                >
                  <ResilientImage
                    src={post.image}
                    alt={post.caption}
                    title={post.category}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-end">
                    <p className="text-xs font-medium text-[#FCE7F3]">
                      {post.category}
                    </p>
                    <p className="text-xs sm:text-sm text-white leading-snug line-clamp-2 mt-1">
                      {post.caption}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section
        id="reviews"
        className="scroll-mt-20 py-16 lg:py-24 bg-[#FAFAFA] border-t border-slate-200/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                Customer Reviews
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight">
                Trusted by Founders, Couples &amp; Design Studios
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-700 tabular-nums">
              <div className="flex items-center text-[#9D174D]" aria-hidden="true">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="font-semibold text-[#0F172A]">4.9 / 5.0</span>
              <span className="text-slate-500">· 1,400+ All-India Orders</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, index) => (
              <motion.blockquote
                key={review.id}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{
                  duration: 0.38,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{y: -3}}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-5 h-5 text-[#9D174D]/50" aria-hidden="true" />
                    <span className="text-xs font-medium text-slate-500">
                      {review.project}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <footer className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {review.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {review.role} · {review.company} · {review.city}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Portfolio Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{opacity: 0, scale: 0.96, y: 12}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.96, y: 8}}
              transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  title={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project preview"
                  className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-white/90 hover:bg-white text-[#0F172A] flex items-center justify-center shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9D174D]"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-[#9D174D]">
                    {selectedProject.category} · {selectedProject.client} · {selectedProject.city}
                  </p>
                  <h3
                    id="portfolio-modal-title"
                    className="font-display text-2xl font-semibold text-[#0F172A]"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedProject.summary}
                </p>
                <p className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Production Specs: {selectedProject.specs}
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onOpenQuote(`Similar to: ${title}`);
                    }}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors cursor-pointer"
                  >
                    Request Similar Print Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
