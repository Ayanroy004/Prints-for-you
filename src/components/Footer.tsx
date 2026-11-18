import {Instagram, MessageCircle, Phone} from 'lucide-react';
import {BUSINESS_INFO, buildWhatsAppUrl} from '../data/catalog';

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(
    'Hello Prints for you! I have a question regarding a print order.'
  );

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <p className="font-display text-2xl font-bold text-white">
                {BUSINESS_INFO.brand}
              </p>
              <p className="text-xs font-medium text-[#F9A8D4] tracking-wide">
                {BUSINESS_INFO.tagline}
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premium stickers, foil-stamped business cards, luxury wedding invitations, and custom brand packaging — printed in Delhi with insured delivery across India.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#F9A8D4] transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#F9A8D4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Print Catalog
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Stickers &amp; Labels
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Business Cards
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Wedding Invitations
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Custom Packaging
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Custom Prints
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Studio Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:+91${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#F9A8D4] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#F9A8D4]" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li className="text-slate-400">{BUSINESS_INFO.location}</li>
              <li className="text-slate-400">{BUSINESS_INFO.delivery}</li>
              <li className="text-xs text-slate-400">{BUSINESS_INFO.hours}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {year} {BUSINESS_INFO.brand}. All rights reserved.
          </p>
          <p>Crafted in Delhi · Delivering Across India</p>
        </div>
      </div>
    </footer>
  );
}
