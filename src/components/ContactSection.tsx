import {useState, type FormEvent} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {
  CheckCircle2,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Truck,
} from 'lucide-react';
import {BUSINESS_INFO, buildWhatsAppUrl} from '../data/catalog';

const CATEGORY_OPTIONS = [
  'Stickers & Roll Labels',
  'Business Cards (Matte / Foil)',
  'Wedding Invitations & Suites',
  'Custom Rigid & Mailer Packaging',
  'Hang Tags, Flyers & Custom Prints',
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [quantity, setQuantity] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/\D/g, '');

    if (name.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile or WhatsApp number.');
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address or leave it blank.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const formattedWhatsAppEnquiry = buildWhatsAppUrl(
    [
      `Hello Prints for you! New Print Enquiry:`,
      `Name: ${name || 'Customer'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Category: ${category}`,
      quantity ? `Quantity: ${quantity}` : '',
      city ? `Delivery City: ${city}` : '',
      notes ? `Details: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')
  );

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hello Prints for you! I would like to discuss a printing order.'
  );

  return (
    <section id="contact" className="scroll-mt-20 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#9D174D]">
                Contact &amp; Custom Quotes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight">
                Ready to Print? Talk Directly with Our Delhi Studio.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Share your product requirement, quantity, or design file. We respond quickly with paper suggestions, pricing, and delivery timelines across India.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <motion.a
                whileHover={{y: -2}}
                href={`tel:+91${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#9D174D]/50 hover:bg-[#FDF2F8]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] text-[#9D174D] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Call Studio Desk
                  </p>
                  <p className="text-base font-semibold text-[#0F172A] tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{y: -2}}
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#9D174D]/50 hover:bg-[#FDF2F8]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F8] text-[#9D174D] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    WhatsApp Print Concierge
                  </p>
                  <p className="text-base font-semibold text-[#0F172A]">
                    Chat &amp; Send Artwork on WhatsApp
                  </p>
                  <p className="text-xs text-[#9D174D] font-medium mt-0.5">
                    Instant proofs &amp; paper sample videos
                  </p>
                </div>
              </motion.a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#9D174D]">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Location
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {BUSINESS_INFO.location}
                  </p>
                  <p className="text-xs text-slate-500">
                    Print Production Studio
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#9D174D]">
                    <Truck className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Shipping
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {BUSINESS_INFO.delivery}
                  </p>
                  <p className="text-xs text-slate-500">
                    Insured Air &amp; Surface Dispatch
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9D174D] hover:underline pt-1"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>Follow {BUSINESS_INFO.instagramHandle} on Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Product Enquiry Form */}
          <motion.div
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.42, delay: 0.06, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7 bg-[#FAFAFA] rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
                  className="py-8 space-y-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FDF2F8] text-[#9D174D] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-semibold text-[#0F172A]">
                      Enquiry Prepared for {name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Thank you for choosing <span className="font-semibold text-[#0F172A]">Prints for you</span>. Your quote request for <span className="font-semibold text-[#0F172A]">{category}</span> is ready — send it directly to our WhatsApp print desk for fastest proof turnaround, or submit another request below.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <p>
                      <span className="text-slate-500">Category:</span> {category}
                    </p>
                    <p>
                      <span className="text-slate-500">Phone:</span> {phone}
                    </p>
                    {quantity && (
                      <p>
                        <span className="text-slate-500">Estimated Quantity:</span> {quantity}
                      </p>
                    )}
                    {city && (
                      <p>
                        <span className="text-slate-500">Delivery City:</span> {city}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={formattedWhatsAppEnquiry}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Send Request on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setQuantity('');
                        setCity('');
                        setNotes('');
                      }}
                      className="min-h-[44px] px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      New Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.2}}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      Request a Print Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill in your print specifications and we will reply with custom pricing.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3 rounded-lg bg-[#FDF2F8] border border-[#9D174D]/30 text-sm text-[#831843] font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15 tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.in"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-category"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Product Category
                      </label>
                      <select
                        id="contact-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                      >
                        {CATEGORY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-qty"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-qty"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 250 pcs / 100 boxes"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-city"
                        className="block text-xs font-semibold text-[#0F172A]"
                      >
                        Delivery City / Pincode
                      </label>
                      <input
                        id="contact-city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Delhi, Mumbai, Bengaluru"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-notes"
                      className="block text-xs font-semibold text-[#0F172A]"
                    >
                      Print Size, Paper Finish &amp; Requirements
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mention preferred dimensions, foil colour, lamination, or whether you need design assistance..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15 resize-none"
                    />
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{y: -1}}
                      whileTap={{scale: 0.98}}
                      className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D]"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Quote Request</span>
                    </motion.button>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#9D174D] transition-colors inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4 text-[#9D174D]" aria-hidden="true" />
                      <span>Or message us directly on WhatsApp</span>
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
