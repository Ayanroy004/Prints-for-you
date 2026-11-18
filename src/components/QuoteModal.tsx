import {useEffect, useState, type FormEvent} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {CheckCircle2, MessageCircle, X} from 'lucide-react';
import {buildWhatsAppUrl} from '../data/catalog';

interface QuoteModalProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

export function QuoteModal({
  isOpen,
  initialSubject = '',
  onClose,
}: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(initialSubject);
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setProduct(initialSubject || 'Custom Print Project');
      setSubmitted(false);
      setErrorMsg('');
    }
  }, [isOpen, initialSubject]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (name.trim().length < 2) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (digits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const whatsappUrl = buildWhatsAppUrl(
    [
      `Hello Prints for you! Quote Request:`,
      `Product: ${product || 'Custom Print'}`,
      `Name: ${name || 'Customer'}`,
      `Phone: ${phone || 'Not provided'}`,
      quantity ? `Quantity: ${quantity}` : '',
      notes ? `Specifications: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-heading"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.18}}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{opacity: 0, scale: 0.96, y: 12}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.96, y: 8}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quote modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-lg text-slate-500 hover:text-[#0F172A] hover:bg-slate-100 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="py-4 space-y-5">
                <div className="w-11 h-11 rounded-xl bg-[#FDF2F8] text-[#9D174D] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1.5">
                  <h3
                    id="quote-modal-heading"
                    className="font-display text-2xl font-semibold text-[#0F172A]"
                  >
                    Quote Request Ready
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Send this brief straight to our WhatsApp desk for immediate paper options and pricing, or close this window to continue browsing.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-[44px] px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1 pr-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9D174D]">
                    Prints for you · Delhi Studio
                  </p>
                  <h3
                    id="quote-modal-heading"
                    className="font-display text-2xl font-semibold text-[#0F172A]"
                  >
                    Get an Instant Print Quote
                  </h3>
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3 rounded-lg bg-[#FDF2F8] border border-[#9D174D]/30 text-xs sm:text-sm text-[#831843] font-medium"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label
                    htmlFor="modal-product"
                    className="block text-xs font-semibold text-[#0F172A]"
                  >
                    Product or Service
                  </label>
                  <input
                    id="modal-product"
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="e.g. Gold Foil Business Cards"
                    className="w-full min-h-[42px] px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-name"
                      className="block text-xs font-semibold text-[#0F172A]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full min-h-[42px] px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="modal-phone"
                      className="block text-xs font-semibold text-[#0F172A]"
                    >
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit number"
                      className="w-full min-h-[42px] px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15 tabular-nums"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="modal-qty"
                    className="block text-xs font-semibold text-[#0F172A]"
                  >
                    Quantity &amp; Delivery City
                  </label>
                  <input
                    id="modal-qty"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 200 pcs · Deliver to Pune"
                    className="w-full min-h-[42px] px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="modal-notes"
                    className="block text-xs font-semibold text-[#0F172A]"
                  >
                    Finish &amp; Size Notes (Optional)
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Matte velvet, die-cut shape, gold foil, or custom box dimensions..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#9D174D] focus:ring-2 focus:ring-[#9D174D]/15 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#9D174D] hover:underline inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Jump directly to WhatsApp</span>
                  </a>

                  <motion.button
                    type="submit"
                    whileTap={{scale: 0.98}}
                    className="min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[#9D174D] hover:bg-[#831843] rounded-lg transition-colors cursor-pointer"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
