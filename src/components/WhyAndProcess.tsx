import {motion} from 'motion/react';
import {Award, BadgeIndianRupee, Clock, Truck} from 'lucide-react';

interface WhyAndProcessProps {
  onOpenQuote: (subject?: string) => void;
}

const VALUE_PILLARS = [
  {
    number: '01',
    title: 'Premium Quality',
    description:
      'Calibrated colour presses, archival 350–450 GSM paper stocks, hot foil stamping, and crisp die-cut registration inspected sheet by sheet.',
    metric: 'Pantone Matched Proofs',
    Icon: Award,
  },
  {
    number: '02',
    title: 'Affordable Pricing',
    description:
      'Direct studio pricing from our Delhi production floor with transparent MOQ tiers and zero hidden plate or setup surprises.',
    metric: 'Factory-Direct Rates',
    Icon: BadgeIndianRupee,
  },
  {
    number: '03',
    title: 'Fast Processing',
    description:
      'Digital proofs approved within hours and priority 48–72 hour production turnarounds for urgent brand launches and events.',
    metric: '48-Hour Express Dispatch',
    Icon: Clock,
  },
  {
    number: '04',
    title: 'All India Delivery',
    description:
      'Moisture-sealed protective packaging shipped via insured air and surface couriers to Mumbai, Bengaluru, Jaipur, and every Indian pincode.',
    metric: 'Pan-India Doorstep Courier',
    Icon: Truck,
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Choose Product',
    detail:
      'Pick from stickers, business cards, wedding invitations, rigid boxes, or custom stationery in the size and stock you need.',
  },
  {
    step: '02',
    title: 'Share Your Design',
    detail:
      'Send your PDF, AI, CDR, or Canva artwork via WhatsApp or our enquiry form — or ask our studio team to refine your print layout.',
  },
  {
    step: '03',
    title: 'Get a Quote',
    detail:
      'Receive an itemised quote with paper weight, finish recommendations, digital proof preview, and exact dispatch timeline.',
  },
  {
    step: '04',
    title: 'Receive Delivery',
    detail:
      'Once approved, we print, finish, and quality-check your order in Delhi, then ship straight to your doorstep anywhere in India.',
  },
];

export function WhyAndProcess({onOpenQuote}: WhyAndProcessProps) {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 lg:py-24 bg-[#240A17] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Why Choose Us */}
        <div className="space-y-10">
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="grid lg:grid-cols-12 gap-6 items-end"
          >
            <div className="lg:col-span-7 space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#F9A8D4]">
                Why Choose Prints for you
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Print Craftsmanship Built Around Reliability
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-rose-100/85 leading-relaxed">
              Based in Delhi and trusted by D2C founders, wedding planners, and design studios across India for tactile finishes that match the care behind your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map(({number, title, description, metric, Icon}, idx) => (
              <motion.div
                key={number}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{
                  duration: 0.38,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{y: -4}}
                className="bg-white/[0.06] hover:bg-white/[0.1] rounded-2xl p-6 border border-white/15 transition-colors duration-200 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium text-[#F9A8D4] tabular-nums">
                      {number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#9D174D]/50 border border-white/15 text-[#FCE7F3] flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-rose-100/80 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                <p className="pt-4 border-t border-white/15 text-xs font-medium text-[#F9A8D4]">
                  {metric}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
          className="bg-white text-[#0F172A] rounded-2xl border border-white/20 p-6 sm:p-10 lg:p-12 space-y-10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                How It Works
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
                From Artwork to Doorstep in Four Clear Steps
              </h2>
            </div>

            <motion.button
              type="button"
              whileHover={{y: -1}}
              whileTap={{scale: 0.98}}
              onClick={() => onOpenQuote('Custom Print Project')}
              className="min-h-[42px] px-5 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
            >
              Start Your Order
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{opacity: 0, y: 12}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{
                  duration: 0.34,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative space-y-3 pt-4 border-t-2 border-[#FCE7F3]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#9D174D] tabular-nums">
                    Step {item.step}
                  </span>
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline text-xs text-slate-300 font-mono"
                    >
                      &rarr;
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
